class People {
    sayHello = () => {
        console.log(this.name.age())
    }
}

const people = new People();

people.sayHello();