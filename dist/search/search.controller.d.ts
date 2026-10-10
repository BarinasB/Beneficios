import { SearchDocumentDto } from './dto/SearchDocumentDto.dto.js';
import { SearchService } from './search.service.js';
export declare class SearchController {
    private readonly searchService;
    constructor(searchService: SearchService);
    Disability(searchDocumentDto: SearchDocumentDto): Promise<{
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
