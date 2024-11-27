import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity('tache')
export class TacheEntity {

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    title: string;
    @Column()
    description: string;
@CreateDateColumn()
createdAt: Date;
    @UpdateDateColumn({ type: 'datetime', update:false  })
    updatedAt: Date;

    @Column()
    date_fin: Date;

    @Column()
    priorité:number;
    @Column()
    statut:string;
    @Column()
    deadline:Date;
    @Column()
    cycleTime:Date;
    @Column()
    leadTime:Date;
    @Column()
    progrès:String;

}
