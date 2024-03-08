let btn = document.getElementById('generate-btn');
let qr = document.querySelector('.card-footer img');
let cardFooter = document.getElementById('cardFooter');
let userInput = document.getElementById('userInput');

btn.addEventListener('click', () => {
    if (userInput.value != '') {
        generateQrCode();
        setTimeout(() => {
            cardFooter.style.display = 'block';

        }, 200)
    }
});




let generateQrCode = () => {
    let url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= ${userInput.value}`;
    qr.src = url;
}