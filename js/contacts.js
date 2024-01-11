const phoneNumber = document.querySelector('.contacts__phone-icon-wrapper');

phoneNumber.addEventListener('click', () => {
    window.open('tel:+48669326496');
});

function changeTextAreaSize() {
    const landscape = matchMedia("(min-width: 360px) and (orientation: landscape)");
    const textArea = document.getElementById('message');

    if (landscape.matches) {
        textArea.setAttribute('cols', '50');
        textArea.setAttribute('rows', '10');
    } else {
        textArea.setAttribute('cols', '20');
        textArea.setAttribute('rows', '10');
    }
}

changeTextAreaSize();

window.addEventListener('resize', () => {
    changeTextAreaSize();
});