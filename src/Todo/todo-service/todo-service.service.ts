import { Injectable } from '@nestjs/common';
import { todo } from '../Todo.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TodoServiceService {

    private todos: todo[] = [];

    addTodo(title : string): todo {
        const newTodo: todo ={ id:uuid(),title , description:"il s'agit d'un todode title "};
        this.todos.push(newTodo);
        return newTodo;
    }

}

