// Напишите функцию filterByCondition, которая принимает массив объектов и условие для фильтрации.
// Функция должна возвращать новый массив, содержащий только те объекты, которые соответствуют условию.

const users = [
    {name: 'Alice', age: 25},
    {name: 'Bob', age: 30},
    {name: 'Charlie', age: 20}
]

function filterByCondition(arr: object[], condition: any) {
    return arr.filter(item => condition(item))
}

const nameFiltred = filterByCondition(users, (user: any) => user.name == 'Alice')
console.log(nameFiltred);
