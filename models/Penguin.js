export class Penguin {
    constructor(
        name = '',
        img = '',
        environment = 'tundra'
    ) {
        this.name = name;
        this.img = img;
        this.environment = environment;
    }
    speak() {
        alert(`Yo, what up? My name is ${this.constructor.name}!`)
    }
}