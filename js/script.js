"use strict";
const numbersOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", " ");

const personalMovieDB = {
    count: numbersOfFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false,
};
let a = prompt ("Один из последних просмотренных фильмов?", "");
let b = prompt ("На сколько оцените его?", "");

for ( let i = 0; i < 2; i++){
    a = prompt ("Один из последних просмотренных фильмов?", "");
    b = prompt ("На сколько оцените его?", ""); 
   
   if ( a != null && b != null && a != '' && b != '' && a.length < 50){
       console.log( 'Done');
       personalMovieDB.movie [a] = b;
   } else {
       console.log( 'Error');
       i--;
   }
if (personalMovieDB.count < 10){
    console.log( 'Просмотрено довольно мало фильмов!');
} else if (10 <= personalMovieDB.count < 30){
    console.log( 'Вы классический зритель');
} else if (personalMovieDB.count >= 30){
    console.log( 'Вы киноман!');
} else {
    console.log( 'Произошла ошибка!');
}
console.log( personalMovieDB );
   
   
  


}



