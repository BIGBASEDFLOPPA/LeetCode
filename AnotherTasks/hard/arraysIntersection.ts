// Напишите функцию arraysIntersection, которая принимает два массива и возвращает массив их пересечения
// (элементы, которые присутствуют в обоих массивах).

const arr1 = [1,2,3,4,5]
const arr2 = [3,4,5,6,7]
 function arraysIntersection(arr1:number[],arr2:number[]){
    return arr1.filter(item=> arr2.includes(item))
 }

 // Убрать использование include, попробовать сделать со сложностью О(n+m) (Раздельные циклы)

console.log(arraysIntersection(arr1,arr2))
