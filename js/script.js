"use strict";
const numbersOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", " ");

const personalMovieDB = {
    count : numbersOfFilms,
    movie : {},
    actors : {},
    genres : [],
    privat : false,
};
 const a = prompt ("Один из последних просмотренных фильмов?", " ");
 const b = prompt ("На сколько оцените его?", " ");
 const c = prompt ("Один из последних просмотренных фильмов?", " ");
 const d = prompt ("На сколько оцените его?", " ");
 personalMovieDB.movie [a] = b;
 personalMovieDB.movie [c] = d;

 console.log(personalMovieDB);