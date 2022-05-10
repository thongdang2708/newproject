let music_container = document.getElementById('music-container');
let title = document.getElementById('title');
let progress_container = document.getElementById('progress-container');
let progress = document.getElementById('progress');
let audio = document.getElementById('audio');
let cover = document.getElementById('cover');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let play = document.getElementById('play');

let songs = ['hey', 'summer', 'ukulele'];

let idx = 0;

loadSongs(songs[idx]);

function loadSongs(song) {

    title.innerText = song;
    audio.src = `./music/${song}.mp3`;
    cover.src = `./images/${song}.jpg`;
};

play.addEventListener('click', () => {

    let isPlaying = music_container.classList.contains('play');

    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

function playSong() {
    music_container.classList.add('play');
    play.querySelector('i.fas').classList.add('fa-pause');
    play.querySelector('i.fas').classList.remove('fa-play');

    audio.play();
};

function pauseSong() {
    music_container.classList.remove('play');
    play.querySelector('i.fas').classList.add('fa-play');
    play.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause();
};

next.addEventListener('click', nextSong);

function nextSong() {

    idx++;

    if (idx > songs.length - 1) {
        idx = 0;
    };

    loadSongs(songs[idx]);

    playSong();


};

prev.addEventListener('click', backSong);

function backSong(et) {

    idx--;

    if (idx < 0) {
        idx = songs.length - 1;
    };

    loadSongs(songs[idx]);

    playSong();
};

audio.addEventListener('timeupdate', setProgress);

function setProgress(et) {

    let { duration, currentTime } = et.srcElement;
    let formula = (currentTime / duration) * 100;

    progress.style.width = `${formula}%`;
};

progress_container.addEventListener('click', setUpdateDuration);

function setUpdateDuration(ed) {

    let width = this.clientWidth;
    let offsetX = ed.offsetX;
    let duration = audio.duration;
    let formula = (offsetX / width) * duration;
    audio.currentTime = `${formula}`;
};

audio.addEventListener('ended', nextSong);