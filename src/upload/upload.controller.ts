import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  BadRequestException,
  Body,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service.js';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('csv')
  @UseInterceptors(FileInterceptor('file'))
  async uploadCsv(@UploadedFile() file?: Express.Multer.File,
  @Body('correo') correo?: string,
  @Body('valor') valor?: string

) {
    if (!file) {
      throw new BadRequestException('Debes enviar un archivo CSV');
    }

    const result = await this.uploadService.loadFileDisability(file, correo, valor);

    return {
      message: 'Archivo CSV procesado',
      filename: file.originalname,
      size: file.size,
      result: result,
    };
  }
}