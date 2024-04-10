// Напишите функцию flattenArray, которая принимает массив массивов и возвращает плоский массив,
//     т.е. все вложенные массивы должны быть преобразованы в один массив элементов без использования уже созданных методов массива


const arr=[[1,2,3,4,5],[1,2,3,4,5]]
function flattenArray(arr:number[][]){
    const result = arr.flat(Infinity)
    return result
}

function flattenArray2(arr:number[][]|number[]){
    const result = [].concat(...arr)
    return result
}



console.log(flattenArray2(arr));
