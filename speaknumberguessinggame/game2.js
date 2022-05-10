let msg = document.getElementById('msg');

let randomNumber = getRandomNumber();

function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
};

window.speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;

let recognition = new speechRecognition();

recognition.start();

recognition.addEventListener('result', (et) => {
    let message = et.results[0][0].transcript;

    writeMessage(message);
    checkMessage(message);
});

function writeMessage(message) {
    msg.innerHTML = `
    <div> You said: </div>
     <span class="box"> ${message} </span>
    `
};

function checkMessage(message) {

    let num = +message;

    if (Number.isNaN(num)) {
        msg.innerHTML += `<div>  This is not a valid number!        </div>`
    };

    if (num > 100 || num < 1) {
        msg.innerHTML += `<div>   A number must be between 1 and 100             </div>`
    };

    if (num === randomNumber) {
        document.body.innerHTML = `
        <h2>   Congrats. Your answer is correct!   <br> <br>
            You spoke: ${num} </h2>
        <button id="play-again" class="play-again">  Play Again!       </button>
        `
    };

    if (num > randomNumber) {
        msg.innerHTML += `<div>  Please go lower!       </div>`
    };

    if (num < randomNumber) {
        msg.innerHTML += `<div>  Please go higher!           </div>`
    }
};

recognition.addEventListener('end', () => recognition.start());

document.body.addEventListener('click', (ed) => {
    if (ed.target.id == 'play-again') {
        location.reload();
    }
})