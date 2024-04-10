function sortSentence(s: string): string {
    const words = s.split(' ');
    const original=[]

    words.forEach(word=>{
        const position = parseInt(word.slice(-1));
        original[position - 1] = word.slice(0, -1);
    });
    return original.join(' ');
};
console.log(sortSentence("is2 sentence4 This1 a3"));
