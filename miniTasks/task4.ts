let animal = {
    name: "animal",
    age: 10,
    childs: ["child 1", "child 2"],
    deep: {
        deep: {
            name: 'maks'
        }
    }
};


function clone(obj:any) {
    return {...obj};
}
let a = clone(animal)

animal.deep.deep.name = 'Alex';

console.log(a)

// Доделать, чтобы было копирование объекта, а не ссылки
