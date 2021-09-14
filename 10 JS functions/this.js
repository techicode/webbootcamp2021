const cat = {
    name: "miau",
    age: 6,
    printcat() {
        // you cant call the propertie name and age just like that.
        // console.log(`Cat name is ${name} and the age is ${age}`) <-- ReferenceError: name is not defined

        // instead use this.
        console.log(`Cat name is ${this.name} and the age is ${this.age}`)
    }
}

cat.printcat(); // Cat name is miau and the age is 6
