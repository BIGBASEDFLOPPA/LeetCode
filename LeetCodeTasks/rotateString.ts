function rotateString(s: string, goal: string): boolean {
    let index = 0
    for (let i = 0; i < s.length; i++) {
        index = goal.indexOf(s[i],index);
        if (index === -1) {
            return false;
        }
        index++;
    }
    return true
};
console.log(rotateString("abc","ahbgdc"))
