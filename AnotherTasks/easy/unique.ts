// Напиши функцию unique, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного.

function unique(arr:number[]){
    return Array.from(new Set(arr))
}
const arr = [1, 2, 2, 3, 4, 4, 5];
console.log(unique(arr))
