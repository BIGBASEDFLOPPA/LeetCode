// Напиши функцию removeFromArray, которая принимает массив и элемент для удаления
// Функция должна удалить все вхождения элемента из массива и вернуть измененный массив.

    function removeFromArray(arr:number[],elem: number){
        return arr.filter(item=> item !== elem)
    }
console.log(removeFromArray([1,2,3,4,5],5))
