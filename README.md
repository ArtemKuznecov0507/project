'used strict';
alert('Давай поиграем в игру "Угадай число"!!!');

const number = Math.floor(Math.random() * (10 - 1)) + 1;
let gamerAnswer;

for( let i = 0; i < 5; i++){

     gamerAnswer = +prompt( 'Попробуй отгадать число, которое я загадал!Введи число От 1 до 100!У тебя 5 попыток!', '' ); 
if(  gamerAnswer == number ){
    alert('Поздравляю, ты МОЛОДЕЦ!');
    break;
} else if ( gamerAnswer < number ){
    alert('Ты выбрал слишком маленькое число!Попробуй еще раз!');
} else if ( gamerAnswer > number){
    alert('Ты выбрал слишком больше число! Попробуй еще раз!');
} else if ( i == 4 && gamerAnswer !== number){
    alert('Увы,попытки закончились! Вы проиграли!');  
}
    
}

  if ( number !== gamerAnswer){
      alert( 'Увы! Попытки закончлись!Вы проиграли...' );
  }  
