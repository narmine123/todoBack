import { Module } from '@nestjs/common';
import { SkillController } from './skill.controller';
import { SkillService } from './skill.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Skill } from 'src/tache/entities/skill.entity/skill.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Skill])],  // Importer l'entité
  controllers: [SkillController],
  exports: [SkillService],
  providers: [SkillService]
})
export class SkillModule {}
