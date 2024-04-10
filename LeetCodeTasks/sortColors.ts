function sortColors(nums: number[]): void {
    let one = 0;
    let two = 0;
    let three = nums.length-1;

    while(two <= three) {
        if(nums[two]===0){
            [nums[one],nums[two]] = [nums[two],nums[one]]
            one++;
            two++;
        } else if(nums[two]==2) {
            [nums[two],nums[three]] = [nums[three],nums[two]]
            three--;
        } else{
            two++;
        }
    }
};
