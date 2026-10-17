var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { Readable } from 'stream';
import csv from 'csv-parser';
import iconv from 'iconv-lite';
let UploadService = class UploadService {
    prisma;
    BATCH_SIZE = 1000;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async loadFileDisability(file, correo, valor) {
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
            throw new BadRequestException('El archivo debe usar ";" como separador. Verifica los encabezados: tipoDoc;numeroDocumento;estado');
        }
        const expectedHeaders = ['tipoDoc', 'numeroDocumento', 'estado'];
        const csvStream = Readable.from([fileContent]).pipe(csv({
            separator: ';',
            mapHeaders: ({ header }) => (header ?? '').trim().replace(/^\uFEFF/, ''),
        }));
        let headers;
        csvStream.on('headers', (parsedHeaders) => {
            headers = parsedHeaders;
        });
        const rowsToInsert = [];
        let rowNumber = 1;
        try {
            for await (const parsedRow of csvStream) {
                rowNumber += 1;
                if (!headers ||
                    headers.length !== expectedHeaders.length ||
                    !expectedHeaders.every((header, index) => headers?.[index] === header)) {
                    throw new BadRequestException('Error en el formato del archivo: los encabezados deben ser tipoDoc;numeroDocumento;estado');
                }
                const row = parsedRow;
                const kindDocument = this.normalizeTipoDoc(row.tipoDoc);
                const document = row.numeroDocumento?.trim();
                if (!kindDocument || kindDocument.length > 5 || !document || document.length > 40) {
                    throw new BadRequestException(`Fila ${rowNumber}: tipoDoc y numeroDocumento son obligatorios; tipoDoc debe tener hasta 5 caracteres y numeroDocumento hasta 40`);
                }
                rowsToInsert.push({
                    kind_document: kindDocument,
                    document,
                    state: row.estado?.trim().toLowerCase() === 'activo' ? 'activo' : 'excluido',
                });
            }
        }
        catch (error) {
            if (error instanceof BadRequestException) {
                throw error;
            }
            throw new BadRequestException(`Error en la lectura del archivo: ${error instanceof Error ? error.message : String(error)}`);
        }
        if (!headers ||
            headers.length !== expectedHeaders.length ||
            !expectedHeaders.every((header, index) => headers?.[index] === header)) {
            throw new BadRequestException('Error en el formato del archivo: los encabezados deben ser tipoDoc;numeroDocumento;estado');
        }
        for (let offset = 0; offset < rowsToInsert.length; offset += this.BATCH_SIZE) {
            await this.insertBatch(rowsToInsert.slice(offset, offset + this.BATCH_SIZE));
        }
        return {
            message: 'Carga procesada correctamente',
            rows: rowsToInsert.length,
        };
    }
    async insertBatch(data) {
        await this.prisma.tmp_load_data.createMany({
            data,
        });
    }
    normalizeTipoDoc(tipo) {
        const cleanTipo = tipo?.trim().toUpperCase();
        if (cleanTipo === 'PE')
            return 'PEP';
        if (cleanTipo === 'PT')
            return 'PPT';
        return cleanTipo;
    }
};
UploadService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], UploadService);
export { UploadService };
//# sourceMappingURL=upload.service.js.map