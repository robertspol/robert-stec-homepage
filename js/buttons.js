const arrowUp = document.querySelector('.arrow-up');

contactsButton.addEventListener('click', function () {
    scrollTo({
        top: contactsSection.offsetTop,
        behavior: 'smooth',
    });
});

arrowUp.addEventListener('click', function () {
    scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

document.addEventListener('scroll', function () {
    if (scrollY > 100) {
        arrowUp.style.display = 'block';
    } else {
        arrowUp.style.display = 'none';
    }
});