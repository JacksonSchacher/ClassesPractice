export class Xiphias {
    constructor(
        name = '',
        img = '',
        environment = 'water'
    ) {
        this.name = name;
        this.img = img;
        this.environment = environment;
    }
    speak() {
        alert(`Yo, what up? My name is ${this.constructor.name}!`)
    }
}