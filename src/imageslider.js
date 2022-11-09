// imageslider.js



buttonHandler = (event) => {
    console.log('in buttonHandler');
    console.log(event);
    console.log(event.target);

}

buttonInit = () => {
    const buttonElement = document.querySelectorAll('button');
    console.log(buttonElement);
    buttonElement.forEach(element => addEventListener('click', buttonHandler, true));
}


window.addEventListener('DOMContentLoaded', (e) => {
    console.log('DOM loaded and parsed');
    buttonInit();
});