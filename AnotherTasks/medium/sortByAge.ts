// Допустим, у тебя есть массив объектов, представляющих людей, у каждого из которых есть name и age.
//     Напиши функцию sortByAge, которая сортирует массив по возрасту.
const arr = [{name: 'bob1', age: 32}, {name: 'bob2', age: 25}, {name: 'bob3', age: 30}]

function sortByAge(arr: { name: string, age: number }[]) {
    return arr.sort((first, second) => first.age - second.age)
}

console.log(sortByAge(arr))
