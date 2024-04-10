var nums = [2, 7, 11, 15];
function twoSum(nums, target) {
    var indexJ = 0;
    var indexI = 0;
    for (var i = 0; i < nums.length - 1; i++) {
        for (var j = i + 1; j < nums.length - 1; j++) {
            console.log(i, j);
            // if(i+j==target){
            //     let indexI = i;
            //     let indexJ= j;
            //     return [indexJ,indexI];
            // }
        }
    }
    return [];
}
;
console.log(1);
twoSum(nums, 9);
