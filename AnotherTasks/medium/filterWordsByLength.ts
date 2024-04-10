// Фильтрация по длине слова
// Напишите функцию filterWordsByLength, которая принимает массив слов и минимальную длину слова,
//     а возвращает новый массив со словами, длина которых больше или равна заданному минимуму.
const arr = ['яблоко', 'кот', 'чашка', 'бутылка']

function filterWordsByLength(arr: string[], wordLength: number) {
    return arr.filter(item => item.length == wordLength)
}

const arr2 = filterWordsByLength(arr, 3)
console.log(arr2)
