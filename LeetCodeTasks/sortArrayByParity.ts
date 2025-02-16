function sortArrayByParity(nums: number[]): number[] {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        if (nums[left] % 2 !== 0 && nums[right] % 2 === 0) {
            let temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
        }

        if (nums[left] % 2 === 0) left++;
        if (nums[right] % 2 !== 0) right--;
    }

    return nums;

};
console.log(sortArrayByParity([3, 1, 2, 4]))
