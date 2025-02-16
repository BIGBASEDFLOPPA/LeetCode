// function plusOne(digits: number[]): number[] {
//     let nextItemIncr = false;
//     for (let i = digits.length - 1; i >= 0; i--) {
//         if(digits[i] === 9) {
//             digits[i] = 0;
//             nextItemIncr = true
//         } else if(nextItemIncr) {
//             digits[i] += 1
//             nextItemIncr = false
//         } else  {
//             digits[i] += 1
//             break
//         }
//     }
//     return digits
// };
function plusOne(digits: number[]): number[] {
    let nextItemIncr = false;
    for (let i = digits.length - 1; i >= 0; i--) {
        if(digits[i] === 9) {
            digits[i] = 0;
            nextItemIncr = true;
        } else {
            digits[i] += 1;
            nextItemIncr = false;
            break;
        }
    }
    if(nextItemIncr) {
        digits.unshift(1);
    }
    return digits;
}
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))
