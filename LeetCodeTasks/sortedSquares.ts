function sortedSquares(nums: number[]): number[] {
    const result = []
    let left = 0
    let right = nums.length - 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            result[i] = nums[left] * nums[left];
            left++;
        } else {
            result[i] = nums[right] * nums[right];
            right--;
        }
    }
    return result
};
console.log(sortedSquares([-4,-1,0,3,10]))
