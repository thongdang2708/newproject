let left_side = document.querySelector('.left-side');
let right_side = document.querySelector('.right-side');
let slidesLength = right_side.querySelectorAll('div').length;
let upBtn = document.getElementById('up-button');
let downBtn = document.getElementById('down-button');
let slider_container = document.querySelector('.slider-container');
left_side.style.top = `-${(slidesLength - 1) * 100}vh`;

let idx = 0;

upBtn.addEventListener('click', goUp);
downBtn.addEventListener('click', goDown);

function goUp() {
    let sliderContainer = slider_container.clientHeight;
    idx++;

    if (idx > slidesLength - 1) {
        idx = 0;
    }

    right_side.style.transform = `translateY(-${idx*sliderContainer}px)`;
    left_side.style.transform = `translateY(${idx*sliderContainer}px)`;
};

function goDown() {

    let sliderContainer = slider_container.clientHeight;

    idx--;

    if (idx < 0) {
        idx = slidesLength - 1;
    }

    right_side.style.transform = `translateY(-${idx*sliderContainer}px)`;
    left_side.style.transform = `translateY(${idx*sliderContainer}px)`;
}