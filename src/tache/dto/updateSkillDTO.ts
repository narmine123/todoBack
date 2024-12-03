import { IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class updateSkillDTO{
   @IsNotEmpty()
   @IsString()
    nom: string;

    @IsString()
    @IsOptional()
    objectif: string;

    

    @IsNotEmpty()
    @Type (() => Number)
    @IsNumber()
    @Min(0)
    niveauAct:number;

   

}




