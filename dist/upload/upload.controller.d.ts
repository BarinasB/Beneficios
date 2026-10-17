import { UploadService } from './upload.service.js';
export declare class UploadController {
    private readonly uploadService;
    constructor(uploadService: UploadService);
    uploadCsv(file?: Express.Multer.File, correo?: string, valor?: string): Promise<{
        message: string;
        filename: string;
        size: number;
        result: {
            message: string;
            rows: number;
        };
    }>;
}
