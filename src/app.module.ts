import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TacheModule } from './tache/tache.module';
import { TacheEntity } from './tache/entities/tache.entity/tache.entities';
import { SkillModule } from './skill/skill.module';
import { Skill } from './tache/entities/skill.entity/skill.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root123',
      database: 'toDo',
      entities: [TacheEntity, Skill],
      synchronize: true ,//cad chaque modifié appliqué sera ajouté au bd
      autoLoadEntities: true,
      logging: true,
      dropSchema: true, // Supprime les tables avant de recréer le schéma
    }),
    TacheModule,
    SkillModule,
  ],  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
