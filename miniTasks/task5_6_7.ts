for (let i = 0; i < 10; i++) { //! Эту строку можно изменить
    for (let j = 0; j < 10; j++) {
        if (i === 5 && j === 5) {
           break;
        }
        console.log(i, j)
    }
}
