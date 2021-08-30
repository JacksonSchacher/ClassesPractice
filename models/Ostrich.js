export class Ostrich {
    constructor(
        name = '',
        img = '',
        environment = 'plains'
    ) {
        this.name = name;
        this.img = img;
        this.environment = environment;
    }
    speak() {
        alert(`Yo, what up? My name is ${this.constructor.name}!`)
    }
}