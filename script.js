// Play/pause functionality
const audio = document.getElementById('background-audio');
const playPauseButton = document.getElementById('play-pause-button');

function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playPauseButton.classList.remove('paused');
        playPauseButton.classList.add('playing');
    } else {
        audio.pause();
        playPauseButton.classList.remove('playing');
        playPauseButton.classList.add('paused');
    }
}

// Set the initial state of the button
audio.addEventListener('play', () => {
    playPauseButton.classList.add('playing');
    playPauseButton.classList.remove('paused');
});

audio.addEventListener('pause', () => {
    playPauseButton.classList.add('paused');
    playPauseButton.classList.remove('playing');
});

// Automatically play the audio when the page loads
window.addEventListener('load', () => {
    audio.play();
});
