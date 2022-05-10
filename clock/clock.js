let toggle = document.getElementById('toggle');
let timeValue = document.querySelector('.time');
let dateValue = document.querySelector('.date');
let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let second = document.querySelector('.second');
let circle = document.querySelector('.circle');

toggle.addEventListener('click', () => {

    let body = document.body;

    if (body.classList.contains('dark')) {
        toggle.innerText = 'Dark Mode';
        body.classList.remove('dark');
    } else {
        body.classList.add('dark');
        toggle.innerText = 'Light Mode';
    }
})

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'August', 'Sep', 'Oct', 'Nov', 'Dec'];



function setClock() {

    let time = new Date();
    let hourEl = time.getHours();
    let minuteEl = time.getMinutes();
    let secondEl = time.getSeconds();
    let hourForClock = hourEl % 12;
    let day = time.getDay();
    let month = time.getMonth();
    let date = time.getDate();
    let ampm = hourEl >= 12 ? 'PM' : 'AM';

    console.log(`${scale(hourForClock,0, 11, 0, 360)}`);

    hour.style.transform = `translate(-50%,-100%) rotate(${scale(hourForClock, 0, 11, 0, 360)}deg)`;
    minute.style.transform = `translate(-50%,-100%) rotate(${scale(minuteEl, 0, 59, 0, 360)}deg)`;
    second.style.transform = `translate(-50%,-100%) rotate(${scale(secondEl, 0, 59, 0, 360)}deg)`;

    timeValue.innerHTML = `${hourForClock} : ${minuteEl < 10 ? `0:${minuteEl}` : minuteEl} ${ampm}`;
    dateValue.innerHTML = `${days[day]}, ${months[month]} ${date}`;
};




function scale(num, in_min, in_max, out_min, out_max) {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
};

setClock();

setInterval(setClock,1000);