import { IsNotEmpty, IsString } from 'class-validator';

export class SearchDocumentDto {
  @IsString()
  @IsNotEmpty()
  kindDocument: string;

  @IsString()
  @IsNotEmpty()
  documentNumber: string;
}