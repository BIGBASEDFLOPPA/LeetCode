const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const evenOnly = nums.filter(function (n) {
    const remainder = n % 2

    return remainder === 0
})
