class Box<T> {
    private items: T[];
    constructor() {
        this.items=[];
    }
    public add(element: T): void {
        this.items.push(element);
    }
    public remove(): void {
        if (this.items.length > 0) {
            this.items.pop();
        }
    }
    public get count(): number {
        return this.items.length;
    }
}

let box = new Box<Number>();
box.add(1);
box.add(2);
box.add(3);
console.log(box.count);

console.log("-----------");

let box2 = new Box<String>();
box2.add("Pesho");
box2.add("Gosho");
console.log(box2.count);
box2.remove();
console.log(box2.count);
