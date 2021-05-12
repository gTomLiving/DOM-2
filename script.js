// getting the menu buttons to display hidden
//ASK why I can't use query selecotr here.....
const letter = document.getElementById('letters');
letter.style.display = "none";

const number = document.getElementById('numbers');
number.style.display = "none";

const letterField = document.querySelector('.letters');
letterField.style.display = "none";

const numberField = document.querySelector('.numbers');
numberField.style.display = "none";

const dropContent = document.querySelector('.dropdown-content');
dropContent.style.display = "none";


const btn = document.querySelector('.menu-toggle');

btn.addEventListener('click', (event) => {
    dropContent.style.display = "block";
    dropContent.style.backgroundcolor = "red";
    letter.style.display = "block";
    number.style.display = "block";
    numberField.style.display = "none";
    letterField.style.display = "none";

    

    letter.addEventListener('click', (event) => {
        letterField.style.display = "block";
        numberField.style.display = "none";
        letter.style.display = "none";
        number.style.display = "none";

    })
    number.addEventListener('click', (event) => {
        letterField.style.display = "none";
        numberField.style.display = "block";
        letter.style.display = "none";
        number.style.display = "none";

    })


})
