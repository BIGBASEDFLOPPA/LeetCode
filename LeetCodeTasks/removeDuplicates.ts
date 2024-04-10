function removeDuplicates(nums: number[]): number [] {
    let result = [];
    let value = 0;
    for (let i = 0;i<nums.length;i++){
        if(nums[i]!=nums[i+1]){
            value++
            result.push(nums[i])
        }
    }
    return result
};

console.log(removeDuplicates([1,1,2]))
