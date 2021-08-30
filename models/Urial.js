export class Urial {
    constructor(
        name = '',
        img = '',
        environment = ''
    ) {
        this.name = name;
        this.img = img;
    }
    speak() {
        alert(`Yo, what up? My name is ${this.constructor.name}!`)
    }
}