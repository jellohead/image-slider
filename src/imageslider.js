// imageslider.js



buttonHandler = (event) => {
    console.log('in buttonHandler');
    const imgElement = document.querySelector('img');
    console.log(imgElement);
    console.log(document.querySelector('.image').src);
    let imgSrc = document.querySelector('.image').src;




    let imgNumber = imgSrc.search(/[0 - 9]/);
    console.log(imgNumber);
    imgNumber = imgSrc.search(/[0 - 9]\+/);
    console.log(imgNumber);

    console.log(event);
    console.log(event.target);

    console.log(event.target.outerText);

    // const clickedButton = 
    // let i = str.match
    // event.target.outerText == '>' ? imgElement.src = `../resources/${i + 1}.jpeg` : console.log('left arrow');
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


