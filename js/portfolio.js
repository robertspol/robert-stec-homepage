const projectHoverWrappers = document.querySelectorAll('.portfolio__project-hover-wrapper');
const arrows = document.querySelectorAll('.fa-arrow-up-right-from-square');

function handleHover() {
    const hoverMediaQueries = matchMedia('(any-hover: hover)');

    if (hoverMediaQueries.matches) {
        arrows.forEach((arrow, i) => {
            arrow.addEventListener('mouseenter', function () {
                projectHoverWrappers[i].style.opacity = '.2';
            });

            arrow.addEventListener('mouseleave', function () {
                projectHoverWrappers[i].style.opacity = '1';
            });
        });

        projectHoverWrappers.forEach(wrapper => {
            wrapper.addEventListener('mouseenter', function () {
                this.style.opacity = '.2';
            });

            wrapper.addEventListener('mouseleave', function () {
                this.style.opacity = '1';
            });
        });
    }
}

handleHover();

const gamesWrapper = document.querySelector('.portfolio__project-wrapper--games');
const chatWrapper = document.querySelector('.portfolio__project-wrapper--chat');
const englishLanguageSchoolWrapper = document.querySelector('.portfolio__project-wrapper--english-language-school');
const rysiuTaxiStrzegomWrapper = document.querySelector('.portfolio__project-wrapper--rysiu-taxi-strzegom');
const rozrywkolandWrapper = document.querySelector('.portfolio__project-wrapper--rozrywkoland');

gamesWrapper.addEventListener('click', function () {
    open('https://github.com/robertspol/games');
});

chatWrapper.addEventListener('click', function () {
    open('https://github.com/robertspol/chat');
});

englishLanguageSchoolWrapper.addEventListener('click', function () {
    open('https://robertspol.github.io/english_language_school');
});

rysiuTaxiStrzegomWrapper.addEventListener('click', function () {
    open('https://robertspol.github.io/rysiu_taxi_strzegom');
});

rozrywkolandWrapper.addEventListener('click', function () {
    open('https://robertspol.github.io/rozrywkoland');
});