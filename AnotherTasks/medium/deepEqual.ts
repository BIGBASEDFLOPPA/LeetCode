// Напиши функцию deepEqual, которая принимает два аргумента и возвращает true,
// если оба аргумента идентичны или являются объектами, имеющими одинаковые свойства с идентичными значениями.
const obj1 = {first: 1, second: 2}
const obj2 = {first: 1, second: 2}
const obj3 = {first: 3, second: 4}

function deepEqual(arg1: any, arg2: any) {
    if (arg1 === arg2) {
        return true;
    }
    if (arg1 == null || typeof arg1 != 'object' || arg2 == null || typeof arg2 != 'object') {
        return false;
    }

    let keysArg1 = Object.keys(arg1);
    let keysArg2 = Object.keys(arg2);

    if (keysArg1.length !== keysArg2.length) {
        return false;
    }

    for (let key of keysArg1) {
        if (!keysArg2.includes(key) || !deepEqual(arg1, arg2)) {
            return false;
            break;
        }
    }
    return true;
}

// 1. Исправить ошибку переполнения (Сделать в старой функции), Доделать до верного решения
// 2. Написать новую функцию не используя рекурсию


console.log(deepEqual(obj1, obj2))
console.log(deepEqual(obj1, obj3))
