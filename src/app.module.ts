import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoServiceService } from './Todo/todo-service/todo-service.service';
import { TodoControllerController } from './Todo/todo-controller/todo-controller.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root123',
      database: 'ToDo',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
      logging: true
    }),
  ],  controllers: [AppController, TodoControllerController],
  providers: [AppService, TodoServiceService],
})
export class AppModule {}
