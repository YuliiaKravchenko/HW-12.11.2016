let ask = prompt('Хочешь поиграть?Введи Y,если согласен');
if (ask = 'Y') {

    do {
        let userFirst = confirm('Загадай число от 1 до 11');
        let min = 1;
        let max = 11;
        let random = Math.floor(Math.random() * (max - min + 1) + min);
        console.log(random);
            let sum =+ random;
            if (sum > 21) {
                alert('Сумма очков: ' + sum + ' .К сожалению,Вы проиграли');
            }
        }
     while (sum<21)
} 
    
    
