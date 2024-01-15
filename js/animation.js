const name = document.querySelector('.header__name');
const position = document.querySelector('.header__position');
const nameLetters = document.querySelectorAll('.header__name--letters span');
const diffLetter = document.querySelector('.diff-letter');
const positionLetters = document.querySelectorAll('.header__position--letters span');

let nameActiveLetter = 0;

const nameIid = setInterval(() => {
    nameLetters[nameActiveLetter].classList.add('header__name--active');
    nameActiveLetter++;

    if (nameActiveLetter === nameLetters.length) {
        clearInterval(nameIid);
        diffLetter.classList.add('diff-letter--anim');
    }
}, 150);

let positionActiveLetter = 0;

const posIid = setInterval(() => {
    positionLetters[positionActiveLetter].classList.add('header__position--active');
    positionActiveLetter++;

    if (positionActiveLetter === positionLetters.length) {
        clearInterval(posIid);

    }
}, 100);