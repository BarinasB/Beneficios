import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import {SearchDocumentDto} from './dto/SearchDocumentDto.dto.js';


@Injectable()
export class SearchService {
    constructor(
        private readonly prisma: PrismaService,
    ) {}

    async searchDisability(searchDocumentDto: SearchDocumentDto) {

        const User = await this.prisma.tmp_data.findFirst({
            where: {
                kind_document: searchDocumentDto.kindDocument,
                document: searchDocumentDto.documentNumber,
            },
        });

        if (!User) {
            return { message: 'Usuario no encontrado' };
        } 

        return { message: 'Usuario encontrado', User }
        
    

    }

    
}
