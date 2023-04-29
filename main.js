"use strict"

function rememberMyFilms() {
    for (let j = 0; j < 2; j++) {
        const a = prompt('One of the lastest movies?', '');
        b = prompt('How do you cost it?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');

        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('You are watched a lot of movies!');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('You are cool watcher!');
    } else if (personalMovieDB.count >= 30) {
        console.log('You are movie-maniac');
    } else {
        console.log('error! error!');
    }
    }

    detectPersonalLevel();

function showMyDB (hidden) {
        if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);


function whiteYourGenres() {
    for (let i=0; i < 4; i++) {
        prompt('Ваш любимый жанр под номером ${')
    }
}