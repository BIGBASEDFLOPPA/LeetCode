function findDuplicates(nums: number[]): number[] {
    const duplicates=[]
    for (let i = 0; i < nums.length; i++) {
        const idx = Math.abs(nums[i]) - 1;

        if (nums[idx] > 0) {
            nums[idx] *= -1;
        } else {
            duplicates.push(idx + 1);
        }
    }

    return duplicates;

};

console.log(findDuplicates([4,3,2,7,8,2,3,1]))
