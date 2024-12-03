
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('skill')
export class Skill{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nom: string;
    @Column()
    objectif: string;

    @Column()

    niveauAct:number;
}