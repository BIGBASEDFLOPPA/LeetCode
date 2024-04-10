
class Animal{
    public name: string;
    public age: number;
    constructor(name:string,age:number) {
        this.name=name;
        this.age=age
    }
}
class Cat extends Animal{

}
class Dog extends Animal{

}
class Cow extends Animal{

}

function getAllAge(animals :(Animal | Cat)[]) :number{
    let totalAge = 0;
    animals.forEach(animal=>{
        totalAge+=animal.age
    });
    return totalAge
}

let animal1 = new Animal('Hippopotamus',5)
let animal2 = new Cat('Sunny',10)
let allAnimals: (Animal | Cat)[] = [animal1, animal2]
console.log(getAllAge(allAnimals));
