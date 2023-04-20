"use strict"

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privet: false
};


for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', '');

    personalMovieDB.movies[a] = b;

    if (a != null && b != null && a != '' && b != '' && a.lenght < 50) {

    console.log('done');

    } else {
        console.log('error');
        i--;
    }
}

console.log(personalMovieDB);


first: if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    }
    if (personalMovieDB.count > 10 && personaMovieDB.count < 30) {
        alert('Вы классический зритель');
    }

    if (personalMovieDB.count > 30) {
        alert('Вы киноман');

    } else {
        alert('Произошла ошибка');

    };

    continue first



console.log(numberOfFilms);




    /**************************************************************  */




