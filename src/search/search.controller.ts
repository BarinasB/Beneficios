import { Body, Controller, Post } from '@nestjs/common';
import { SearchDocumentDto } from './dto/SearchDocumentDto.dto.js';
import { SearchService} from './search.service.js';

@Controller('search')
export class SearchController {
    constructor(
        private readonly searchService: SearchService
    ) {}

    @Post('disability')
    async Disability(@Body() searchDocumentDto: SearchDocumentDto) {
       return this.searchService.searchDisability(searchDocumentDto); 

    }

}
