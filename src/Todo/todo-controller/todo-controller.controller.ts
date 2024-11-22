import { Body, Controller, Post } from '@nestjs/common';
import { todo } from '../Todo.model';
import { TodoServiceService} from '../todo-service/todo-service.service';

@Controller('todo-controller')
export class TodoControllerController {
    constructor(private readonly todoService: TodoServiceService) {}

    @Post('todopost')
    addTodo(@Body('title') title: string): todo {
      console.log('Received task:');

      return this.todoService.addTodo(title);
    }


}
