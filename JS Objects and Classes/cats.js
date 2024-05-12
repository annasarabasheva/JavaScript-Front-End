function cats(info) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    for (let line of info) {
        let [name, age] = line.split(' ');
        let catObject = new Cat(name, age);
        catObject.meow()
    
    }
}

cats(['Mellow 2', 'Tom 5']);