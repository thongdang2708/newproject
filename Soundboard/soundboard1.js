let soundBox = ['applause', 'indoor', 'laughter', 'cartoon'];
let buttons = document.getElementById('buttons');
fetchDom();

function fetchDom() {

    soundBox.forEach(sound => {

        let button = document.createElement('button');
        button.classList.add('btn');

        button.innerText = sound;

        button.addEventListener('click', () => {
            stopSound();
            document.getElementById(sound).play();
        })
        buttons.appendChild(button);

    })
};

function stopSound() {

    soundBox.forEach(sound => {
        let soundEl = document.getElementById(sound);

        soundEl.pause();

        soundEl.currentTime = 0;
    })



}