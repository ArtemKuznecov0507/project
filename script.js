"use strict";

const personalMovieDB = {
    count: 0,
    movie: {},
    actors: {},
    genres: [],
    privat: false,
    start : function (){
        personalMovieDB.count = +prompt("Сколько фильмов Вы уже посмотрели?", '');
        while ( personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt("Сколько фильмов Вы уже посмотрели?", " "); 
        }
 },
    rememberMyFilms : function (){
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
    },

    detectPersonalLevel : function (){
        if (personalMovieDB.count < 10){
            console.log( 'Просмотрено довольно мало фильмов!');
        } else if (10 <= personalMovieDB.count < 30){
            console.log( 'Вы классический зритель');
        } else if (personalMovieDB.count >= 30){
            console.log( 'Вы киноман!');
        } else {
            console.log( 'Произошла ошибка!');
        }
        
    },
    showMyDB : function (){
        if (personalMovieDB.privat == false){
            console.log(personalMovieDB);
        }
    },
    writeYourGenres :  function(){
        for ( let i = 1; i < 4; i++){
            let genres = prompt ( `Ваш любимый жанр под номером ${ i }`);
            
            if (genres == null || genres == ''){
                console.log ('Вы ввели не корректное значение');
                i--;  
            } else {
            personalMovieDB.genres[ i - 1] = genres;
            }
        }
        personalMovieDB.genres.forEach( (item, i) => {
            console.log(`Любимый жанр № ${ i + 1 } - это ${ item } `);
        });

       
    },
    toggleVisibleMyDB : function (){
        if (personalMovieDB.privat){
             personalMovieDB.privat = false;
        } else {
             personalMovieDB.privat = true; 
        }


        
    }

};












   
  




