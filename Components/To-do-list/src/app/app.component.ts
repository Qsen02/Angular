import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDo } from './typesAndClasses';
import { TodoItemComponent } from './todoItem/todoItem.component';
import { ToDoService } from './app.service';

@Component({
    selector: 'app-root',
    standalone: true,
    providers: [ToDoService],
    imports: [RouterOutlet, TodoItemComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'To-do-list';
    todos:ToDo[]=[];
    
    constructor(private todoService: ToDoService) {
        this.todos=this.todoService.todoList;
    }       

    public addTodo(): void {
        const content: HTMLInputElement = document.getElementById("todoName") as HTMLInputElement;
        this.todoService.addTodo({ content: content.value });
        content.value = "";
    }
}
