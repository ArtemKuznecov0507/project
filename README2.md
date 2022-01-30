'used strict';
alert('Давай поиграем в игру "Угадай число"!!!');

const givenValue = Math.floor(Math.random() * 100) + 1;
let gamerAnswer;
const valueForTheCounter = 5;

for( let i = 0; i < valueForTheCounter; i++){

     gamerAnswer = +prompt( 'Попробуй отгадать число, которое я загадал!Введи число От 1 до 100!У тебя 5 попыток!', '' ); 
if(  gamerAnswer == givenValue ){
    break;
} else if ( gamerAnswer < givenValue ){
    alert('Ты выбрал слишком маленькое число!Попробуй еще раз!');
} else if ( gamerAnswer > givenValue){
    alert('Ты выбрал слишком больше число! Попробуй еще раз!');
} 
    
}
if( givenValue == gamerAnswer){
    alert('Поздравляю, ты МОЛОДЕЦ!');
}
  if ( givenValue !== gamerAnswer){
      alert( 'Увы! Попытки закончлись!Вы проиграли...' );
  }  
