export class Koala {
    constructor(
        name = '',
        img = '',
        environment = 'forest'
    ) {
        this.name = name;
        this.img = img;
        this.environment = environment;
    }
    speak() {
        alert(`Yo, what up? My name is ${this.constructor.name}!`)
    }
}