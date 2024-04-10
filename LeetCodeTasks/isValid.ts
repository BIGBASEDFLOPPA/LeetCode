function isValid(s: string): boolean {
    type tBrackets = {
        [index: string]: string;
    }

    const brackets: tBrackets = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    const result: string[] = []
    for (const item of s) {
        if (brackets.hasOwnProperty(item)) {
            result.push(item)
        } else {
            const deleteItem: string | undefined = result.pop();
            if (deleteItem !== undefined && item !== brackets[deleteItem]) {
                return false;
            }
        }
    }
    return result.length == 0
};


console.log(isValid("([{])"))
