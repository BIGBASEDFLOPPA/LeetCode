function checkRange(num:number,start:number,end:number){
    for(let i = start;i<=end;i++){
        if(i % num==0){
            console.log(i + " делится без остатка")
        }
        else if(i % num !==0){
            console.log(i + " не делится без остатка")
        }
    }
}
checkRange(2,1,10)
