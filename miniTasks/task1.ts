let arr:number[] =[1,2,3,4,5,6,7];
function evenSqrt(){
    let result = 0;
    for(let i = 0;i <arr.length;i++){
        if(arr[i]%2 == 0){
            result+=(arr[i]*arr[i])
        }
    }
}

// Написать новую функцию испольхуя метод массива
//Сумму квадратов мб,а не корней
