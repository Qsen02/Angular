import { Component, Input } from "@angular/core";
import { ToDo } from "../typesAndClasses";
import { ToDoService } from "../app.service";

@Component({
    selector: "app-todo-item",
    templateUrl: "./todoItem.component.html",
    styleUrl: "./todoItem.component.css",
    standalone: true
})
export class TodoItemComponent {
    @Input("todoProp") todo: ToDo | null = null;

    constructor(private todoService: ToDoService) { }

    public isEditFormShown = false;

    public deleteTodo(event: Event): void {
        if (this.todoService.todoList) {
            const target = event.target as HTMLElement
            const content = target?.parentElement?.parentElement?.parentElement?.children[0].children[0].textContent;
            this.todoService.deleteTodo(content);
        }
    }

    public showEditForm(): void {
        if (!this.isEditFormShown) {
            this.isEditFormShown = true;
        } else {
            this.isEditFormShown = false;
        }
    }

    public editToDo(event: Event) {
        if (this.todoService.todoList) {
            const target = event.target as HTMLElement
            const newContent = target.parentElement?.children[0] as HTMLInputElement;
            const oldContent = target.parentElement?.parentElement?.children[0]
            this.todoService.updateTodo(oldContent?.textContent, newContent.value);
            newContent.value = "";
        }
    }
}