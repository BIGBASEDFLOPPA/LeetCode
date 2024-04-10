function searchRange(nums: number[], target: number): number[] {
    function binarySearch(value: number): number {
        let left = 0;
        let right = nums.length;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] >= value) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return left;
    }

    const startIdx = binarySearch(target);
    const endIdx = binarySearch(target + 1) - 1;
    return startIdx <= endIdx ? [startIdx, endIdx] : [-1, -1];
}
console.log(searchRange([5,7,7,8,8,10],6))
