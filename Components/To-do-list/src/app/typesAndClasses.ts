interface ToDo {
    content: string
}

export class ToDos {
    private todoList: ToDo[];

    constructor(todoList: ToDo[]) {
        this.todoList = todoList;
    }

    public get TodoList(): ToDo[] {
        return this.todoList;
    }

    public addTodo(todo: ToDo): void {
        this.todoList.push(todo);
    }

    public deleteTodo(content: string): void {
        const removingTodo = this.todoList.find(el => el.content == content);
        if (removingTodo) {
            const index = this.todoList.indexOf(removingTodo);
            this.todoList.splice(index, 1);
        }
    }

    public editTodo(content: string):void {
        const removingTodo = this.todoList.find(el => el.content == content);
        if (removingTodo) {
            const index = this.todoList.indexOf(removingTodo);
            this.todoList.splice(index, 1, { content: content });
        }
    }
}