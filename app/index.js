import Entity from './entity';

class Hobbit extends Entity {
    constructor(name, height){
        super(name,height);
    }
}

let Frodo = new Hobbit("Frodo Baggins", 4.5);
console.greet();