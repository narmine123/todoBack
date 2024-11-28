import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { TacheEntity } from './tache.entities';

@Entity('Subtask')

export class SubTask {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToOne(() => TacheEntity, (tache) => tache.subtasks)
  @JoinColumn({ name: 'tache_id' })

  tache: TacheEntity;
}
