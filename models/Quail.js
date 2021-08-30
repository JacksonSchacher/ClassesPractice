export class Quail {
    constructor(
        name = '',
        img = '',
        environment = 'grassland'
    ) {
        this.name = name;
        this.img = img;
        this.environment = environment;
    }
    speak() {
        alert(`Yo, what up? My name is ${this.constructor.name}!`)
    }
}