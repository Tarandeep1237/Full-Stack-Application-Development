// Video Controls
const video = document.getElementById("blogVideo");

function playVideo() {
    video.play();
}

function pauseVideo() {
    video.pause();
}

function stopVideo() {
    video.pause();
    video.currentTime = 0;
}

// Audio Controls
const audio = document.getElementById("blogAudio");
const seekBar = document.getElementById("audioSeek");

function playAudio() {
    audio.play();
}

function pauseAudio() {
    audio.pause();
}

function stopAudio() {
    audio.pause();
    audio.currentTime = 0;
}

// Update seek bar
audio.addEventListener("timeupdate", function() {
    seekBar.value = (audio.currentTime / audio.duration) * 100;
});

// Seek audio
seekBar.addEventListener("input", function() {
    audio.currentTime = (seekBar.value / 100) * audio.duration;
});
