let email = prompt('Введите email');

if (email != '') {

    let result = email.split(/[@.]/, 3);
    let firstPart = result[0];
    let secondPart = result[1];
    let thirdPart = result[2];

    if (firstPart.length < 4) {
        alert('Количество символов до @ должно быть больше 4');
    } else if (secondPart.length <= 1) {
        alert('Количество символов после @ и до . должно быть больше 1, но меньше 10');
    } else if (secondPart.length > 10) {
        alert('Количество символов после @ и до . должно быть больше 1, но меньше 10');
    } else if (thirdPart.length <= 2) {
        alert('Количество символов после . должно быть больше 1, но меньше 5');
    } else if (thirdPart.length > 5) {
        alert('Количество символов после . должно быть больше 1, но меньше 5');
    } else {
        alert('Ваш электронный адрес: ' + firstPart + '@' + secondPart + '.' + thirdPart);
        console.log('Ваш электронный адрес: ' + firstPart + '@' + secondPart + '.' + thirdPart);
    }
} else if (email = ' ') {
    alert("Пользователь не ввел email");
    console.log('Пользователь не ввел email');
}