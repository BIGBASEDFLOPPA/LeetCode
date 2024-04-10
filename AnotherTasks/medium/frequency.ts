const arr = [5, 5, 5, 2, 2,  9, 4, 2, 2, 2];
function frequency(arr:number[]){
    let obj: Record<number, number> = {}
    arr.forEach(item=>{
        if(obj[item]){
            obj[item]= obj[item] + 1
        } else {
            obj[item] = 1
        }
    });
    return obj;
}

console.log(frequency(arr));
