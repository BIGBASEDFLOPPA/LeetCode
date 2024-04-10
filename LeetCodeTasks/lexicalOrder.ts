function lexicalOrder(n: number): number[] {
    let result = [];
    let curr = 1;
    for (let i = 1; i <= n; i++){
        result.push(curr);
        if (curr * 10 <= n) {
            curr *= 10;
        } else if (curr % 10 !== 9 && curr + 1 <= n) {
            curr++;
        } else {
            while (parseInt(String(curr / 10)) % 10 === 9){
                curr = parseInt(String(curr / 10));
            }
            curr = parseInt(String(curr / 10)) + 1;
        }
    }
    return result;
};
console.log(lexicalOrder(13))
