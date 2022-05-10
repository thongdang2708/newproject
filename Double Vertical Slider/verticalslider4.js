let left_side = document.querySelector('.left-side');
let right_side = document.querySelector('.right-side');
let slidesLength = right_side.querySelectorAll('div').length;
let upBtn = document.getElementById('up-button');
let downBtn = document.getElementById('down-button');
let slider_container = document.querySelector('.slider-container');
let idx = 0;
left_side.style.top = `-${(slidesLength - 1)*100}vh`;

upBtn.addEventListener('click', () => {

    let clientHeight = slider_container.clientHeight;

    idx++;

    if (idx > slidesLength - 1) {
        idx = 0;
    }

    right_side.style.transform = `translateY(-${idx*clientHeight}px)`;
    left_side.style.transform = `translateY(${idx*clientHeight}px)`;
});

downBtn.addEventListener('click', () => {

    let clientHeight = slider_container.clientHeight;

    idx--;

    if (idx < 0) {
        idx = slidesLength - 1;
    }

    right_side.style.transform = `translateY(-${idx*clientHeight}px)`;
    left_side.style.transform = `translateY(${idx*clientHeight}px)`;
})