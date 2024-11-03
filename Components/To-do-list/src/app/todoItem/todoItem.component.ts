import { Component, Input } from "@angular/core";
import { ToDo } from "../typesAndClasses";

@Component({
    selector: "app-todo-item",
    templateUrl: "./todoItem.component.html",
    styleUrl: "./todoItem.component.css",
    standalone: true
})
export class TodoItemComponent {
    @Input("todoProp") todo: ToDo | null = null;
    @Input("todoListProp") todoList: ToDo[] | null = null;

    public isEditFormShown = false;

    public deleteTodo(event: Event): void {
        if (this.todoList) {
            const target = event.target as HTMLElement
            const content = target?.parentElement?.parentElement?.parentElement?.children[0].children[0].textContent;
            const removingTodo = this.todoList.find(el => el.content == content);
            if (removingTodo) {
                const index = this.todoList.indexOf(removingTodo);
                this.todoList.splice(index, 1);
            }
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
        if (this.todoList) {
            const target = event.target as HTMLElement
            const newContent = target.parentElement?.children[0] as HTMLInputElement;
            const oldContent = target.parentElement?.parentElement?.children[0].textContent;
            const todo = this.todoList.find(el => el.content == oldContent);
            if (todo) {
                const index = this.todoList.indexOf(todo);
                this.todoList[index].content = newContent.value;
                newContent.value = "";
            }
        }
    }
}