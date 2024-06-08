const music = document.querySelector('.music');
const play = document.querySelector('.play');
const next = document.querySelector('.right');
const previous = document.querySelector('.left');
let currentTrackIndex = 0;
const trackImage = document.querySelector('.image'); 
const trackTitle = document.getElementById('trackTitle');
const progressBar = document.querySelector('.progress');
const currentTimeElement = document.getElementById('currentTime');
const remainingTimeElement = document.getElementById('remainingTime');


const musicSources = [
    "music/everyday green.mp3",
    "music/Y2meta.app - LUCY(루시) - 개화 (Flowering) [가사_Lyrics] (128 kbps).mp3",
    "music/Y2meta.app - 바래 Wish (128 kbps).mp3",
    "music/Y2meta.app - 이무진 - 청혼하지 않을 이유를 못 찾았어 [가사_Lyrics] (128 kbps).mp3"
]

const imageSources = [
    "music/laura-chouette-HWHzfXNE2kQ-unsplash.jpg",
    "music/pexels-mo-eid-9002742.jpg",
    "music/wallpaperbetter.com_1920x1080 (4).jpg",
    "music/wallpaperbetter.jpg"
]

const trackTitles = [
    "Everyday Green",
    "LUCY(루시) - 개화 (Flowering)",
    "DAY6(데이식스) - 바래 Wish",
    "이무진 - 청혼하지 않을 이유를 못 찾았어"
];

function changeTrack() {
    music.src = musicSources[currentTrackIndex];
    trackImage.src = imageSources[currentTrackIndex];
    trackTitle.textContent = trackTitles[currentTrackIndex]; 
    music.play();
    updatePlayButton();
}

play.addEventListener('click', () => {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
    updatePlayButton();
});

next.addEventListener('click', () => {
    currentTrackIndex = (currentTrackIndex + 1) % musicSources.length;
    changeTrack();
});

previous.addEventListener('click', () => {
    if (currentTrackIndex > 0) {
        currentTrackIndex--;
    } else {
        currentTrackIndex = musicSources.length - 1;
    }
    changeTrack();
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

function updateProgressBar() {
    const currentTime = music.currentTime;
    const duration = music.duration;
    const progressPercent = (currentTime / duration) * 100;
    progressBar.style.width = `${progressPercent}%`;

    currentTimeElement.textContent = formatTime(currentTime);
    remainingTimeElement.textContent = duration ? formatTime(duration - currentTime) : '0:00';
}

function updatePlayButton() {
    const playIcon = play.querySelector('.playicon');
    if (music.paused) {
        playIcon.classList.remove('fa-pause');
        playIcon.classList.add('fa-play');
    } else {
        playIcon.classList.remove('fa-play');
        playIcon.classList.add('fa-pause');
    }
}
music.addEventListener('timeupdate', updateProgressBar);


// 초기화
document.addEventListener('DOMContentLoaded', () => {
    changeTrack(); 
});
