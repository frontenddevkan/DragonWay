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


function showMyDB (privat) {
    if (privat === false) {
        console.log("main object");
    } else {

    }
}

function whiteYourGenres() {
    for (let i=0; i < 4; i++) {
        prompt('Ваш любимый жанр под номером ${')
    }
}