class Dog {
    constructor(name, fur) {
        this.name = name;
        this.furColor = fur;
        this.legsCount = 4;
        this.hasTail = true;
        this.soundCount = 0;
    }

    sound() {
        this.soundCount++;
        console.log(`${this.name}: au au! (${this.soundCount})`);
    }

}

module.exports = Dog;