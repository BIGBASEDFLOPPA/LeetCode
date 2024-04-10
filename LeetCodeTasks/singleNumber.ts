function singleNumber(nums: number[]): number {
    const objNums: {[key: number]: boolean} = {}
    const objNumsRepeat: Record<number, boolean> = {}
    for (let i = 0; i < nums.length; i++) {
        if (!objNums?.[nums[i]]) {
            objNums[nums[i]] = true
        } else if (objNumsRepeat?.[nums[i]]) {
           continue;
        } else {
            objNumsRepeat[nums[i]] = true;
            delete objNums[nums[i]];
        }
    }

    if(Object.keys(objNums).length > 0) {
        for(const key of Object.keys(objNums)) {
            return Number(key);
        }
    }
    return -1;
};

console.log(singleNumber([33, 1, 33, 2, 1]))

