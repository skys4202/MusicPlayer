const music = document.querySelector('.music');
const play = document.querySelector('.play');
const next = document.querySelector('.right');
const previous = document.querySelector('.left');
let currentTrackIndex = 0;
const trackImage = document.querySelector('.image'); 
const trackTitle = document.getElementById('trackTitle');


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
    trackTitle.textContent = trackTitles[currentTrackIndex]; // 현재 트랙 제목 업데이트
    music.play();
}

play.addEventListener('click', () => {
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
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