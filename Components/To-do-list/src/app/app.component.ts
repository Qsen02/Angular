import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDo } from './typesAndClasses';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'To-do-list';
  todoList: ToDo[] = []

  public addTodo():void {
    const content:HTMLInputElement=document.getElementById("todoName") as HTMLInputElement;
    this.todoList.push({ content: content.value });
    content.value="";
  }
}
