
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TacheService } from './tache.service';
import { TacheController } from './tache.controller';
import { TacheEntity } from './entities/tache.entity/tache.entities';
import { SubTask } from './entities/tache.entity/subtask.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TacheEntity , SubTask])],  // Importer l'entité
  providers: [TacheService],  // Ajouter TacheService comme fournisseur
  exports: [TacheService],
  controllers: [TacheController],
})
export class TacheModule {}
