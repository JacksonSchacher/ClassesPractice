export class Whale {
    constructor(
        name = '',
        img = ''
    ) {
        this.name = name;
        this.img = img;
    }
    speak() {
        alert(`Yo, what up? My name is ${this.constructor.name}!`)
    }
}