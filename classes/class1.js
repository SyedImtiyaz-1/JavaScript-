// Before Classes 

// const dog = {
//     name: "doggie",
//     age: 3
// };

// const cat = {
//     name: "kitty",
//     age: 2
// };

// console.log(`${dog.name} age ==> ${dog.age}`)
// console.log(`${cat.name} age ==> ${cat.age}`)

// Starting Classes

class Animal {
    constructor(name, legCount, speaks) {
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }

    static keyword(){
        return("This is a static method");
    }
    
    speak(){ 
        console.log("hi there " + this.speaks)
    }

    leg() {
        console.log(`hi there, i have ${this.legCount} legs`)
    }
}

console.log(Animal.keyword()); // calling static method using class name

let dog = new Animal("dog", 4, "bhow bhow") // creating obj
let cat = new Animal("cat", 4, "meow meow")

cat.leg() // calling the function which is inside the class


// calling directly on the class that time you have to use static keyword.