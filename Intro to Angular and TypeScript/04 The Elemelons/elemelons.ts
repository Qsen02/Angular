interface Elemelons {
    weight: number,
    melonSort: string,
}

abstract class Melon implements Elemelons {
    public weight: number;
    public melonSort: string;
    constructor(weight: number, melonSort: string) {
        this.weight = weight;
        this.melonSort = melonSort;
    }
}

class Watermelon extends Melon {
    private elementIndex: number;
    private element: string;
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.elementIndex = this.weight * this.melonSort.length;
        this.element = "Water";
    }
    public get getElementIndex(): number {
        return this.elementIndex;
    }

    public toString(): void {
        console.log(`Element: ${this.element}\nSort: ${this.melonSort}\nElement index: ${this.elementIndex}`);
    }
}
class Firemelon extends Melon {
    private elementIndex: number;
    private element: string;
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.elementIndex = this.weight * this.melonSort.length;
        this.element = "Fire";
    }
    public get getElementIndex(): number {
        return this.elementIndex;
    }

    public toString(): void {
        console.log(`Element: ${this.element}\nSort: ${this.melonSort}\nElement index: ${this.elementIndex}`);
    }
}
class Earthmelon extends Melon {
    private elementIndex: number;
    private element: string;
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.elementIndex = this.weight * this.melonSort.length;
        this.element = "Earth";
    }
    public get getElementIndex(): number {
        return this.elementIndex;
    }

    public toString(): void {
        console.log(`Element: ${this.element}\nSort: ${this.melonSort}\nElement index: ${this.elementIndex}`);
    }
}
class Airmelon extends Melon {
    private elementIndex: number;
    private element: string;
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.elementIndex = this.weight * this.melonSort.length;
        this.element = "Air";
    }
    public get getElementIndex(): number {
        return this.elementIndex;
    }

    public toString(): void {
        console.log(`Element: ${this.element}\nSort: ${this.melonSort}\nElement index: ${this.elementIndex}`);
    }
}

class Melolemonmelon extends Watermelon {
    private possibleElements: string[];
    private index: number;
    private curElement: string;
    private curElementIndex: number;
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.possibleElements = ["Water", "Fire", "Earth", "Air"];
        this.index = 0;
        this.curElement = "";
        this.curElementIndex = this.weight * this.melonSort.length;
    }
    public morph(): void {
        const index = this.index;
        if (index >= 4) {
            this.index = 0;
        }
        this.curElement = this.possibleElements[index];
        this.index++;
    }
    public toString(): void {
        console.log(`Element: ${this.curElement}\nSort: ${this.melonSort}\nElement index: ${this.curElementIndex}`);
    }
}

let watermelon: Watermelon = new Watermelon(12.5, "Kingsize");
watermelon.toString();

// Element: Water
// Sort: Kingsize
// Element Index: 100
console.log("---------------");
let morph: Melolemonmelon = new Melolemonmelon(10, "unknown");
morph.morph();
morph.morph();
morph.toString();
