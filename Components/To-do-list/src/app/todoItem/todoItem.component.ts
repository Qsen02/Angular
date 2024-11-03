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
}