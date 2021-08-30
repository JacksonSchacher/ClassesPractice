export class Yak {
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