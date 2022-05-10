let msg = document.getElementById('msg');

let randomNum = 11;

window.speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;

let recognition = new speechRecognition();

recognition.start();

// function getRandomNumber() {
//     return Math.floor(Math.random() * 100) + 1;
// };

recognition.addEventListener('result', onSpeak);

function onSpeak(ed) {

    let message = ed.results[0][0].transcript;

    writeMessage(message);
    checkMessage(message);
};

function writeMessage(message) {

    msg.innerHTML = `
    <div>    You said:           </div>
    <span class="box">     ${message}         </span>
    `
};

function checkMessage(message) {

    let num = +message;

    if (Number.isNaN(num)) {
        msg.innerHTML += `<div> This is not a valid number! </div>`
    };

    if (num > 100 || num < 1) {
        msg.innerHTML += 'Number must be between 1 and 100';
    };

    if (num === randomNum) {
        document.body.innerHTML = `
        <h2>   Congrats! You have guessed the correct number <br> <br>
                It was ${num} </h2>
        <button class="play-again" id="play-again">  Play Again      </button>
        `
    };

    if (num > randomNum) {
        msg.innerHTML += `<div>  Go Lower!   </div>`
    };

    if (num < randomNum) {
        msg.innerHTML += `<div>   Go Higher!              </div>`
    }
};

recognition.addEventListener('end', () => recognition.start());

document.body.addEventListener('click', (et) => {
    if (et.target.id == "play-again") {
        location.reload();
    }
})