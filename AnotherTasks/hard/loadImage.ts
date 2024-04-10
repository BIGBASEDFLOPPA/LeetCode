const api1 = 'https://jsonplaceholder.typicode.com/todos/1';
const apiArr = ['https://jsonplaceholder.typicode.com/todos/2', 'https://jsonplaceholder.typicode.com/todos/2', 'https://jsonplaceholder.typicode.com/todos/3', 'https://jsonplaceholder.typicode.com/todos/4']
const fetchUrl = apiArr.map(url=> fetchData(url))
function fetchData(url:string) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('error');
                }
            })
            .then((data) => resolve(data))
            .catch((error) => reject(error));
    });
}
// if(!Promise.allSettled) {
//     Promise.allSettled = function(promises) {
//         return Promise.all(promises.map(p => Promise.resolve(p).then(value => ({
//             status: 'fulfilled',
//             value: value
//         }), error => ({
//             status: 'rejected',
//             reason: error
//         }))));
//     };
// }


// map

//Доделать, чтобы можно было запашивать любое количество запросов
Promise.allSettled(fetchUrl)
    .then(([data1,data2])=>{
        console.log('data1 ',data1);
        console.log('data2',data2);
    })
    .catch((error)=>{console.log('error')})


// fetchData(api1)
//     .then((data1) => {
//         console.log('Data1:', data1);
//         return fetchData(api2);
//     })
//     .then((data2) => console.log('Data2:', data2))
//     .catch((error) => console.error('Error:', error));



// Переделать на обычнй запрос
// Нужно добавить массив урлов.
// И скачивать их параллельно, если один не загрузился то не прерывать выполнение, чтобы остальные загрузились
// [url, url, url, url]
