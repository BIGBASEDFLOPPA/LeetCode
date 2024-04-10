function removeOccurrences(s: string, part: string): string {
    const stack = [];

    for (let char of s) {
        stack.push(char);

        if (stack.length >= part.length && stack.slice(-part.length).join('') === part) {
            stack.splice(-part.length);
        }
    }
    return stack.join('')
};
console.log(removeOccurrences("daabcbaabcbc", "abc"))
