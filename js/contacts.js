const landscape = matchMedia("(min-width: 360px) and (orientation: landscape)");

function changeTextAreaSize() {
    const textArea = document.getElementById('message');

    if (landscape.matches) {
        textArea.setAttribute('cols', '50');
        textArea.setAttribute('rows', '10');
    } else {
        textArea.setAttribute('cols', '20');
        textArea.setAttribute('rows', '10');
    }
}

changeTextAreaSize(landscape);

landscape.addEventListener('change', function () {
    changeTextAreaSize(landscape);
});