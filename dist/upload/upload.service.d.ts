import { PrismaService } from '../prisma/prisma.service.js';
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
export declare class UploadService {
    private readonly prisma;
    private readonly BATCH_SIZE;
    constructor(prisma: PrismaService);
    loadFileDisability(file: Express.Multer.File, correo?: string, valor?: string): Promise<{
        message: string;
        rows: number;
    }>;
    private insertBatch;
    private normalizeTipoDoc;
}
