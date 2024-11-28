import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { SubTask } from "./subtask.entity";


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
    @OneToMany(() => SubTask, (subTask) => subTask.tache, { cascade: true })
   subtasks: SubTask[];

}
