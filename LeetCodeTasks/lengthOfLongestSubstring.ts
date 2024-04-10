function lengthOfLongestSubstring(s: string): number {
    let maxLength = 0
    let start = 0
    let charIndex = {}

    for(let i = 0; i < s.length;i++) {
        if (s[i] in charIndex) {
            start = Math.max(start, charIndex[s[i]] + 1);
        }
        charIndex[s[i]] = i;
        maxLength = Math.max(maxLength, i - start + 1);
    }
    return maxLength;

};
