
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

    @Column({ default: 0 }) // Initialise le progrès à 0%
    progress: number; // Progrès en pourcentage (0 à 100)
    @Column()

    cycleTime:string;
    @Column()

    LeadTime:string;
    @Column()

    DateIdee:Date;

    @Column({ type: 'timestamp', nullable: true })
    DateDebut:Date;
    @Column({ type: 'timestamp', nullable: true })
    DateFin:Date;
}