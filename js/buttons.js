const topArrow = document.querySelector('.fa-angles-up');

contactsButton.addEventListener('click', function () {
    scrollTo({
        top: contactsSection.offsetTop,
        behavior: 'smooth',
    });
});

topArrow.addEventListener('click', function () {
    scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

document.addEventListener('scroll', function () {
    if (scrollY > 100) {
        topArrow.style.display = 'block';
    } else {
        topArrow.style.display = 'none';
    }
});