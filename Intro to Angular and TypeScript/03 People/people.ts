interface Human {
    name: string,
    age: number,
    salary: number,
    tasks: string[]
}

abstract class Employee implements Human {
    public name: string;
    public age: number;
    public salary: number;
    public tasks: string[];

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = [];
    }

    public work(): void {
        const currentTask = this.tasks.shift();
        if (currentTask) {
            this.tasks.push(currentTask);
        }
        this.salary+=1000;
        console.log(this.name + currentTask);
    }

    public collectSalary(): void {
        console.log(`${this.name} received ${this.getSalary()} this month.`)
    }

    public getSalary(): number {
        return this.salary;
    }

    static printTask(): void {
        const junior = new Junior("Pesho", 20);
        const senior = new Senior("Gosho", 35);
        const manager = new Manager("Tosho", 32);
        const wokers = [junior, senior, manager];
        for (let worker of wokers) {
            for (let task of worker.tasks) {
                worker.work();
            }
        }
        junior.collectSalary();
        senior.collectSalary();
        manager.collectSalary();
    }
}

class Junior extends Employee {
    constructor(name: string, age: number) {
        super(name, age);
        this.tasks.push(" is working on a simple task.");
    }
}

class Senior extends Employee {
    constructor(name: string, age: number) {
        super(name, age);
        this.tasks.push(" is working on a complicated task.");
        this.tasks.push(" is taking time off work.");
        this.tasks.push(" is supervising junior wokers.");
    }
}

class Manager extends Employee {
    public divident: number;
    constructor(name: string, age: number) {
        super(name, age);
        this.tasks.push(" sheduled a meeting.");
        this.tasks.push(" is preparing a quartely meeting.");
        this.divident = this.tasks.length*550;
    }

    public getSalary(): number {
        return this.salary + this.divident;
    }
}

Employee.printTask();