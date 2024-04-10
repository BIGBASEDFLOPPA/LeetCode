function minPairSum(nums: number[]): number {
    nums.sort((a, b) => a - b);
    let maxSum = -Infinity;
    for (let i = 0; i < nums.length / 2; i++) {
        maxSum = Math.max(maxSum, nums[i] + nums[nums.length - 1 - i]);
    }
    return maxSum;
}
console.log(minPairSum([3,5,2,3]))
