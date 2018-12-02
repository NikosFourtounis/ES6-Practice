class Entity {
    constructor(name, height){
        this.name = name;
        this.height = height;
    }

    greet() {
        console.log(`Hi! I'm ${this.name}`);
    }
}

let Merry = new Entinty("Merry", 4.6);
Merry.greet();