import { IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class addSkillDTO{
   @IsNotEmpty()
   @IsString()
    nom: string;

    @IsString()
    objectif: string;

    

    @IsNotEmpty()
    @Type (() => Number)
    @IsNumber()
    @Min(0)
    niveauAct:number;

   

}




