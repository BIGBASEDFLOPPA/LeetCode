// есть 2 ендпоинта

// users

const users = [
    {
        name: 'ARLK Andrey',
        books: [1, 2, 6],
    },
    {
        name: 'KVA Ilmar',
        books: [4, 6],
    },
    {
        name: 'ACV Ruslan',
        books: [],
    },
];

// books
const books = [
    {
        id: 1,
        name: 'The Da Vinci Code',
        author: 'Dan Braun',
    },
    {
        id: 2,
        name: 'Clean code',
        author: 'Robert Martin',
    },
    {
        id: 3,
        name: 'William Shakespeare',
        author: 'Hamlet',
    },
    {
        id: 4,
        name: 'Faust',
        author: 'Johann Wolfgang von Goethe',
    },
    {
        id: 5,
        name: 'Nineteen Eighty-Four',
        author: 'George Orwell',
    },
    {
        id: 6,
        name: 'Brave New World',
        author: 'Aldous Huxley',
    },
];

// function findBook(users,books){
//    for(let user of users){
//        for(let book of books){
//            for(let item of user.books){
//                if(item === book.id){
//                    user.books.shift()
//                    user.books.push(book)
//                     console.log(item)
//                }
//            }
//        }
//    }
// }
function findBook(users,books){
    users.map((user,id)=>{
        for(let book of books){

        }
    })
}

findBook(users,books)
console.log(JSON.stringify(users, null))



// У какого человека какие книги. Вывести списком пользователей со всеми его книгами(+ описание)
// Dmitriy=> книги: да винчи автора дена брауна, слеар кода роберта мартина...
