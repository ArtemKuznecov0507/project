"use strict";
let numbersOfFilms; 
function start (){
    numbersOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", '');
    while ( numbersOfFilms == '' || numbersOfFilms == null || isNaN(numbersOfFilms)){
        numbersOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", " "); 
    }
    
}
   start();


const personalMovieDB = {
    count: numbersOfFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false,
};


function rememberMyFilms (){
    for ( let i = 0; i < 2; i++){
        const a = prompt ("Один из последних просмотренных фильмов?", "");
        const b = prompt ("На сколько оцените его?", ""); 
       
       if ( a != null && b != null && a != '' && b != '' && a.length < 50){
           console.log( 'Done');
           personalMovieDB.movie [a] = b;
       } else {
           console.log( 'Error');
           i--;
       }
    } 
}

rememberMyFilms();



function detectPersonalLevel (){
    if (personalMovieDB.count < 10){
        console.log( 'Просмотрено довольно мало фильмов!');
    } else if (10 <= personalMovieDB.count < 30){
        console.log( 'Вы классический зритель');
    } else if (personalMovieDB.count >= 30){
        console.log( 'Вы киноман!');
    } else {
        console.log( 'Произошла ошибка!');
    }
    
}
detectPersonalLevel();

function showMyDB (){
    if (personalMovieDB.privat == false){
        console.log(personalMovieDB);
    }
}
showMyDB();
   
   function writeYourGenres (){
       for ( let i = 1; i < 4; i++){
           personalMovieDB.genres [ i-1 ] = prompt ( `Ваш любимый жанр под номером ${ i }`);
       }
   }
writeYourGenres();



