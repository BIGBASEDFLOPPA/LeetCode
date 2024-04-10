function romanToArabic(roman:string) :number {
    type romanNum = Record<string, number>
    const romanNumerals:romanNum= {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result:number = 0;
    let previousValue:number = 0;

    for (let i = roman.length - 1; i >= 0; i--) {
        const currentValue = romanNumerals[roman[i]];
        if (currentValue >= previousValue) {
            result += currentValue;
        } else {
            result -= currentValue;
        }
        previousValue = currentValue;
    }

    return result;
}
