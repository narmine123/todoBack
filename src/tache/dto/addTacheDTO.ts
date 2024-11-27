import { IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class addTacheDTO{
   @IsNotEmpty()
   @IsString()
    title: string;

    @IsOptional()
    @IsString()
    description: string;

    @IsNotEmpty()
    createdAt: Date;

    @IsNotEmpty()
    updatedAt: Date;

    @IsNotEmpty()
    date_fin: Date;

    @IsNotEmpty()
    @Type (() => Number)
    @IsNumber()
    @Min(1)
    priorité:number;

    @IsNotEmpty()
    @IsString()
    statut:string;

    @IsNotEmpty()
    deadline:Date;

    @IsNotEmpty()
    cycleTime:Date;

    @IsNotEmpty()
    leadTime:Date;

    @IsNotEmpty()
    @IsString()
    progrès:String;

}




