import { PrismaService } from '../prisma/prisma.service.js';
import { SearchDocumentDto } from './dto/SearchDocumentDto.dto.js';
export declare class SearchService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    searchDisability(searchDocumentDto: SearchDocumentDto): Promise<{
        message: string;
        User?: undefined;
    } | {
        message: string;
        User: {
            id: number;
            kind_document: string | null;
            document: string | null;
            amount: string | null;
            state: string | null;
        };
    }>;
}
