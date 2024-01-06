const projectHoverWrappers = document.querySelectorAll('.portfolio__project-hover-wrapper');
const arrows = document.querySelectorAll('.fa-arrow-up-right-from-square');

// if (arrow.matches(':hover')) {
arrows.forEach((arrow, i) => {
    arrow.addEventListener('mouseenter', function () {
        projectHoverWrappers[i].style.opacity = '.2';
    });

    arrow.addEventListener('mouseleave', function () {
        projectHoverWrappers[i].style.opacity = '1';
    });
});
// }

// if (projectHoverWrapper.matches(':hover')) {
projectHoverWrappers.forEach(wrapper => {
    wrapper.addEventListener('mouseenter', function () {
        this.style.opacity = '.2';
    });

    wrapper.addEventListener('mouseleave', function () {
        this.style.opacity = '1';
    });
});
// }

const gryWrapper = document.querySelector('.portfolio__project-wrapper--gry');
const chatWrapper = document.querySelector('.portfolio__project-wrapper--chat');
const englishLanguageSchoolWrapper = document.querySelector('.portfolio__project-wrapper--english-language-school');
const rysiuTaxiStrzegomWrapper = document.querySelector('.portfolio__project-wrapper--rysiu-taxi-strzegom');
const rozrywkolandWrapper = document.querySelector('.portfolio__project-wrapper--rozrywkoland');

gryWrapper.addEventListener('click', function () {
    open('https://github.com/robertspol/Gry');
});

chatWrapper.addEventListener('click', function () {
    open('https://github.com/robertspol/Chat');
});

englishLanguageSchoolWrapper.addEventListener('click', function () {
    open('https://robertspol.github.io/English-Language-School');
});

rysiuTaxiStrzegomWrapper.addEventListener('click', function () {
    open('https://robertspol.github.io/Rysiu-Taxi-Strzegom');
});

rozrywkolandWrapper.addEventListener('click', function () {
    open('https://robertspol.github.io/Rozrywkoland');
});