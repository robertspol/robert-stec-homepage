const contactsButton = document.querySelector('.top-buttons-wrapper__contacts');
const translationButton = document.querySelector('.top-buttons-wrapper__translate');

const aboutNameSection = document.querySelector('.about .main__section-name');
const textAbout = document.querySelector('.about p');

const projectGamesName = document.querySelector('.portfolio__project-name--games');

const gamesDescription = document.querySelector('.portfolio__description--games');
const chatDescription = document.querySelector('.portfolio__description--chat');;
const englishLanguageSchoolDescription = document.querySelector('.portfolio__description--english-language-school');
const rysiuTaxiStrzegomDescription = document.querySelector('.portfolio__description--rysiu-taxi-strzegom');
const rozrywkolandDescription = document.querySelector('.portfolio__description--rozrywkoland');

const contactsSection = document.querySelector('.contacts .main__section-name');
const contactsTextSection = document.querySelector('.contacts__email p');

const sendernameLabel = document.querySelector('label[for="sendername"]');
const subjectLabel = document.querySelector('label[for="subject"]');
const messageLabel = document.querySelector('label[for="message"]');
const emailButton = document.querySelector('.contacts__button');

let translation = false;

const translateIntoEnglish = () => {
    contactsButton.textContent = 'Contacts';
    translationButton.textContent = 'Przetłumacz na polski';

    contactsButton.setAttribute('title', 'Contact me');
    translationButton.setAttribute('title', 'Translate into Polish');

    aboutNameSection.textContent = 'About me';
    textAbout.textContent = 'Welcome to my website! My name is Robert Stec, and I am a programming enthusiast. I have always been a humanities person eager to explore the world and define it through text. However, over time, I decided to expand my horizons into the realm of exact sciences and began writing text in the form of code. Programming is control over an incredibly powerful machine, which is a computer, and I am constantly developing my skills to deliver the best possible product to anyone who chooses to get in touch with me and use my services. I recommend myself and thank you for visiting my site!';

    projectGamesName.textContent = 'Games';

    gamesDescription.textContent = 'Two games with the option to create an account and save game progress';
    chatDescription.textContent = 'Online messenger';
    englishLanguageSchoolDescription.textContent = 'Website of a non-existent English language school with an interactive dictionary containing basic expressions and an automated gallery with the option for manual operation';
    rysiuTaxiStrzegomDescription.textContent = "Taxi driver's website business card";
    rozrywkolandDescription.textContent = 'Website business card for a company offering entertainment and medical services';
    contactsSection.textContent = 'Contacts';
    contactsTextSection.textContent = 'Write me an email';

    sendernameLabel.textContent = 'From';
    subjectLabel.textContent = 'Subject';
    messageLabel.textContent = 'Message';
    emailButton.textContent = 'Send';
}

const translateIntoPolish = () => {
    contactsButton.textContent = 'Kontakt';
    translationButton.textContent = 'Translate into English';

    contactsButton.setAttribute('title', 'Skontaktuj się ze mną');
    translationButton.setAttribute('title', 'Przetłumacz na język angielski');

    aboutNameSection.textContent = 'O mnie';
    textAbout.textContent = 'Witaj na mojej stronie! Nazywam się Robert Stec i jestem pasjonatem programowania. Zawsze byłem humanistą żądnym poznawania świata i definiowania go za pomocą tekstu, jednak z czasem postanowiłem rozwinąć się o nauki ścisłe i rozpocząłem pisać tekst w postaci kodu. Programowanie to władza nad niesamowicie potężną maszyną, jaką jest komputer, a ja nieustannie rozwijam swoje umiejętności, aby dostarczyć jak najlepszy produkt każdemu, kto zdecyduje się na kontakt ze mną i skorzystanie z moich usług. Polecam się i dziękuję za odwiedzenie mojej strony!';

    projectGamesName.textContent = 'Gry';

    gamesDescription.textContent = 'Dwie gry z możliwością założenia konta oraz zapisywania stanu rozgrywki';
    chatDescription.textContent = 'Komunikator internetowy';
    englishLanguageSchoolDescription.textContent = 'Strona internetowa nieistniejącej szkoły języka angielskiego z interaktywnym słownikiem zawierającym podstawowe wyrażenia i zautomatyzowaną galerią z możliwością ręcznego operowania';
    rysiuTaxiStrzegomDescription.textContent = 'Strona internetowa-wizytówka kierowcy taksówki';
    rozrywkolandDescription.textContent = 'Strona internetowa-wizytówka firmy oferującej usługi rozrywkowe oraz medyczne';

    contactsSection.textContent = 'Kontakt';
    contactsTextSection.textContent = 'Napisz do mnie e-mail';

    sendernameLabel.textContent = 'Od';
    subjectLabel.textContent = 'Temat';
    messageLabel.textContent = 'Wiadomość';
    emailButton.textContent = 'Wyślij';
}

if (navigator.language === 'en') {
    translation = true;
    englishTranslation();
}

translationButton.addEventListener('click', () => {
    translation = !translation;

    if (translation === true) {
        translateIntoEnglish();
    } else {
        translateIntoPolish();
    }
});