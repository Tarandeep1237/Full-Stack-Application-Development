function toggleVideo() {
    const video = document.getElementById("blogVideo");

    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function toggleAudio() {
    const audio = document.getElementById("blogAudio");

    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
