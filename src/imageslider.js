// imageslider.js



buttonHandler = (event) => {
    console.log('in buttonHandler');
    const imgSrc = document.querySelector('.image').src;
    console.log(imgSrc);
    console.log(typeof imgSrc);

    // find number from image file name
    let imgNumber = imgSrc.match(/(?<=\/)[0-9]+(?=.(?=[a-zA-Z]))/);
    console.log(imgNumber[0]);
    let i = Number(imgNumber[0]);

    // returns arrow in button
    console.log(event.target.outerText);

    const clickedButton = event.target.outerText;
    clickedButton == '>' ? j = i + 1 : j = i - 1;

    console.log(j);
    // const changedSrc = clickedButton == '>' ? imgSrc = `../resources/${i + 1}.jpeg`: imgSrc = `../resources/${i - 1}.jpeg`;
    // console.log(changedSrc);
    // imgSrc = `../resources/${j}.jpeg`;
    document.querySelector('.image').src = `../resources/${j}.jpeg`;
    console.log(imgSrc);

    // event.target.outerText = clickedButton;
    // event.target.outerText == '>' ? console.log('right arrow' + imgElement) : console.log('left arrow');

    // matching regex for file number
    // (/(?<=\/)[0-9]+(?=.(?=[a-zA-Z]))/)

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


