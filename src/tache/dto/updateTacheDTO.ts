import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class updateTacheDTO {
  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsDate()
  @IsOptional()
  @Type(() => Date) // Conversion explicite en Date
  createdAt: Date;

  @IsDate()
  @IsOptional()
  @Type(() => Date) // Conversion explicite en Date
  updatedAt: Date;

  @IsDate()
  @IsNotEmpty() // Rendre obligatoire si nécessaire
  @Type(() => Date) // Conversion explicite en Date
  date_fin: Date;

  @Type(() => Number) // Conversion explicite en nombre
  @IsNumber()
  @Min(1)
  @IsOptional()
  priorité: number;

  @IsString()
  @IsOptional()
  statut: string;

  @IsDate()
  @IsOptional()
  @Type(() => Date) // Conversion explicite en Date
  deadline: Date;

  @IsDate()
  @IsOptional()
  @Type(() => Date) // Conversion explicite en Date
  cycleTime: Date;

  @IsDate()
  @IsOptional()
  @Type(() => Date) // Conversion explicite en Date
  leadTime: Date;

  @IsString()
  @IsOptional()
  progrès: string; // Utilisation du type natif string
}
