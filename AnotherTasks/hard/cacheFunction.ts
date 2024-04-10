// Напишите функцию cacheFunction, которая принимает другую функцию в
// качестве аргумента и возвращает версию этой функции с кэшированием результатов.
// Если кэшированная функция вызывается с ранее использованными аргументами,
// она должна возвращать результат из кэша, а не выполнять новый вызов.
const str = 10
function cacheFunction(fn:any){
    const cache = {}
    return function cachedFn(str:any) {
        if(!cache[str]){
            cache[str] = fn(str)
        }
        return cache[str]
    }
}

// Разобраться как это работает

function smth(str:any){
    console.log(str + 1)
}
const computed = cacheFunction(smth(str))
computed(12);
console.log(computed)
