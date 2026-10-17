import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { Readable } from 'stream';
import csv from 'csv-parser';
import iconv from 'iconv-lite';

export interface CsvRow {
    tipoDoc: string;
    numeroDocumento: string;
    estado: string;
}

export interface TmpLoadDataInput {
    kind_document: string;
    document: string;
    state: string;
}

@Injectable()
export class UploadService {

    private readonly BATCH_SIZE = 1000;

    constructor(private readonly prisma: PrismaService) { }

    async loadFileDisability(file: Express.Multer.File, correo?: string, valor?: string) {
        if (!file) {
            throw new BadRequestException('Debes enviar un archivo CSV');
        }

        if (!file.originalname.toLowerCase().endsWith('.csv')) {
            throw new BadRequestException('El archivo debe tener extensión CSV');
        }

        const utf8Content = file.buffer.toString('utf8');
        const fileContent = Buffer.from(utf8Content, 'utf8').equals(file.buffer)
            ? utf8Content
            : iconv.decode(file.buffer, 'latin1');
        const firstLine = fileContent
            .split(/\r?\n/)
            .find((line) => line.trim() !== '');

        if (!firstLine || !firstLine.includes(';')) {
            throw new BadRequestException(
                'El archivo debe usar ";" como separador. Verifica los encabezados: tipoDoc;numeroDocumento;estado'
            );
        }

        const expectedHeaders = ['tipoDoc', 'numeroDocumento', 'estado'];
        const csvStream = Readable.from([fileContent]).pipe(
            csv({
                separator: ';',
                mapHeaders: ({ header }) => (header ?? '').trim().replace(/^\uFEFF/, ''),
            })
        );
        let headers: string[] | undefined;
        csvStream.on('headers', (parsedHeaders: string[]) => {
            headers = parsedHeaders;
        });

        const rowsToInsert: TmpLoadDataInput[] = [];
        let rowNumber = 1;

        try {
            for await (const parsedRow of csvStream) {
                rowNumber += 1;

                if (
                    !headers ||
                    headers.length !== expectedHeaders.length ||
                    !expectedHeaders.every((header, index) => headers?.[index] === header)
                ) {
                    throw new BadRequestException(
                        'Error en el formato del archivo: los encabezados deben ser tipoDoc;numeroDocumento;estado'
                    );
                }

                const row = parsedRow as CsvRow;
                const kindDocument = this.normalizeTipoDoc(row.tipoDoc);
                const document = row.numeroDocumento?.trim();

                if (!kindDocument || kindDocument.length > 5 || !document || document.length > 40) {
                    throw new BadRequestException(
                        `Fila ${rowNumber}: tipoDoc y numeroDocumento son obligatorios; tipoDoc debe tener hasta 5 caracteres y numeroDocumento hasta 40`
                    );
                }

                rowsToInsert.push({
                    kind_document: kindDocument,
                    document,
                    state: row.estado?.trim().toLowerCase() === 'activo' ? 'activo' : 'excluido',
                });
            }
        } catch (error) {
            if (error instanceof BadRequestException) {
                throw error;
            }
            throw new BadRequestException(
                `Error en la lectura del archivo: ${error instanceof Error ? error.message : String(error)}`
            );
        }

        if (
            !headers ||
            headers.length !== expectedHeaders.length ||
            !expectedHeaders.every((header, index) => headers?.[index] === header)
        ) {
            throw new BadRequestException(
                'Error en el formato del archivo: los encabezados deben ser tipoDoc;numeroDocumento;estado'
            );
        }

        for (let offset = 0; offset < rowsToInsert.length; offset += this.BATCH_SIZE) {
            await this.insertBatch(rowsToInsert.slice(offset, offset + this.BATCH_SIZE));
        }

        return {
            message: 'Carga procesada correctamente',
            rows: rowsToInsert.length,
        };
    }

    private async insertBatch(data: TmpLoadDataInput[]) {
        await this.prisma.tmp_load_data.createMany({
            data,
        });
    }

    private normalizeTipoDoc(tipo: string): string {
        const cleanTipo = tipo?.trim().toUpperCase();
        if (cleanTipo === 'PE') return 'PEP';
        if (cleanTipo === 'PT') return 'PPT';
        return cleanTipo;
    }
}