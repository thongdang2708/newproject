let soundBox = ['applause', 'laughter', 'indoor', 'cartoon'];
let button_container = document.getElementById('buttons');

fetchDom();

function fetchDom() {


    soundBox.forEach(sound => {

        let button = document.createElement('button');
        button.classList.add('btn');

        button.innerText = sound;

        button.addEventListener('click', () => {
            stopSounds();
            document.getElementById(sound).play();

        })
        button_container.appendChild(button);

    })


};


function stopSounds() {

    soundBox.forEach(sound => {
        let soundEl = document.getElementById(sound);

        soundEl.pause();

        soundEl.currentTime = 0;
    })
}