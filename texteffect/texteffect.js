let textEl = document.getElementById('text');
let speedEl = document.getElementById('speed');

let idx = 1;

let text = 'We Love Programming';

let speed = 300 / speedEl.value;

displayDom();

function displayDom() {

    textEl.innerText = text.slice(0, idx);

    idx++;

    if (idx > text.length) {
        idx = 1;
    };

    setTimeout(displayDom, speed);
};

speedEl.addEventListener('input', (et) => speed = 300 / et.target.value);