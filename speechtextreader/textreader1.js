let main = document.querySelector('main');
let toggle = document.getElementById('toggle');
let text_box = document.getElementById('text-box');
let close = document.getElementById('close');
let voiceSelect = document.getElementById('voices');
let read = document.getElementById('read');
let textarea = document.querySelector('textarea');
const data = [{
        image: './img/angry.jpg',
        text: "I am angry",
    },

    {
        image: './img/drink.jpg',
        text: "I want to drink",
    },

    {
        image: './img/food.jpg',
        text: "I am hungry",
    },

    {
        image: './img/grandma.jpg',
        text: "Grandma",
    },

    {
        image: './img/happy.jpg',
        text: "I am happy",
    },

    {
        image: './img/home.jpg',
        text: "My Home",
    },

    {
        image: './img/hurt.jpg',
        text: "I am hurt",
    },

    {
        image: './img/outside.jpg',
        text: "I am outside",
    },

];

createBoxes();

function createBoxes() {

    data.forEach(infor => createBox(infor));
};

function createBox(infor) {

    let box = document.createElement('div');
    box.classList.add('box');
    box.innerHTML = `
    <img src="${infor.image}" alt="${infor.text}">
 
    <p class="info">   ${infor.text}        </p>
    `;

    box.addEventListener('click', () => {
        setMessage(infor.text);
        speakText();
    })

    main.appendChild(box);
};

toggle.addEventListener('click', () => {
    text_box.classList.add('show');
});

close.addEventListener('click', () => {
    text_box.classList.remove('show');
});

speechSynthesis.addEventListener('voiceschanged', getVoices);

let voices = [];

function getVoices() {

    voices = speechSynthesis.getVoices();

    voices.forEach(voice => {
        let option = document.createElement('option');

        option.value = voice.name;
        option.innerText = `${voice.name} ${voice.lang}`;

        voiceSelect.appendChild(option);
    })
};

let message = new SpeechSynthesisUtterance();

function setMessage(text) {
    message.text = text;
}

function speakText() {
    speechSynthesis.speak(message);
};

voiceSelect.addEventListener('change', (ed) => {
    message.voice = voices.find(voice => voice.name == ed.target.value);
});

read.addEventListener('click', () => {
    setMessage(textarea.value);
    speakText();
})


getVoices();