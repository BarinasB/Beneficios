import { IsNotEmpty, IsString } from 'class-validator';

export class SearchDocumentDto {
  @IsString()
  @IsNotEmpty()
  tipoDocumento: string;

  @IsString()
  @IsNotEmpty()
  numeroDocumento: string;
}