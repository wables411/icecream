function togglePlayPause() {
    const audio = document.getElementById('background-audio');
    const button = document.getElementById('play-pause-button');

    if (audio.paused) {
        audio.play();
        button.classList.remove('paused');
    } else {
        audio.pause();
        button.classList.add('paused');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('play-pause-button');
    button.addEventListener('click', togglePlayPause);
});
