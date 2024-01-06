// const emailButton = document.querySelector('.contacts__button');

emailButton.addEventListener('click', () => {
    emailjs.init('zw9-FcKUn5IweqHVA');

    const sendername = document.querySelector('#sendername');
    const subject = document.querySelector('#subject');
    // const replyTo = document.querySelector('#replyto');
    const message = document.querySelector('#message');

    const serviceID = 'service_sdyh0nf';
    const templateID = 'template_kdaaqso';

    const params = {
        sendername: sendername.value,
        to: 'robertstecpl@gmail.com',
        subject: subject.value,
        // replyto: replyTo.value,
        message: message.value,
    };

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            alert('E-mail został wysłany pomyślnie');

            sendername.value = '';
            subject.value = '';
            // replyTo.value = '';
            message.value = '';
        })
        .catch(err => alert('Coś poszło nie tak :-('));
});