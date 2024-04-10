// Счетчик вызовов функции
// Создайте функцию createCallCounter, которая возвращает другую функцию.
// Возвращенная функция при вызове увеличивает и возвращает счетчик вызовов. Используйте замыкания.

function createCallCounter(){
    let counter = 0
    return function (){
        counter++;
        return counter;
    }
}
const call = createCallCounter();
console.log(call(),call(),call());
