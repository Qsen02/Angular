import { ToDo } from "./typesAndClasses";

export class ToDoService {
    todoList: ToDo[] = [];

    public addTodo(todo: ToDo) {
        this.todoList.push(todo);
    }

    public deleteTodo(content: string | null | undefined) {
        const oldTodo = this.todoList.find(el => el.content == content);
        if (oldTodo) {
            const index = this.todoList.indexOf(oldTodo);
            this.todoList.splice(index, 1);
        }
    }

    public updateTodo(oldContent: string | null | undefined, newContent: string) {
        const oldTodo = this.todoList.find(el => el.content == oldContent);
        if (oldTodo) {
            const index = this.todoList.indexOf(oldTodo);
            this.todoList[index].content = newContent;
        }
    }
}