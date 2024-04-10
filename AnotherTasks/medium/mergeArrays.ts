// Напишите функцию mergeArrays, которая принимает два массива, объединяет их в один и возвращает результат.
//     Убедитесь, что в итоговом массиве нет дубликатов.

const arr1 = [1,2,3,4,5,5,6,7]
const arr2 = [1,2,3,4,5,6,7,8,9,10]

function mergeArrays(arr1:number[],arr2:number[]){
    const mergedArr=[...arr1,...arr2]
    const result = Array.from(new Set(mergedArr))
    return result
}
console.log(mergeArrays(arr1,arr2))
