// Напиши функцию stringToArray, которая принимает строку, разделяет её по пробелам и возвращает массив слов.
const str='1 2 3 4 str str str'
function stringToArray(str:string){
    return str.split(' ')
}
console.log(stringToArray(str))
