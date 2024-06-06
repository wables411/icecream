// Emoji trail effect
document.addEventListener('mousemove', function(e) {
    const emoji = document.createElement('div');
    emoji.textContent = '🍦';
    emoji.style.position = 'absolute';
    emoji.style.left = `${e.clientX}px`;
    emoji.style.top = `${e.clientY}px`;
    emoji.style.fontSize = '24px';
    emoji.style.transition = 'opacity 0.5s ease'; // Adjusted fade-out duration
    document.body.appendChild(emoji);

    setTimeout(() => {
        emoji.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(emoji);
        }, 500); // Adjusted removal timing to match fade-out duration
    }, 250); // Initial display duration before fade-out starts
});

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
