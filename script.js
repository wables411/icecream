// Falling ice cream emojis effect
document.addEventListener('DOMContentLoaded', function() {
    setInterval(() => {
        let emojiCount = Math.floor(Math.random() * 10) + 1; // Randomly create between 1 and 10 emojis at a time
        for (let i = 0; i < emojiCount; i++) {
            createIceCreamEmoji();
        }
    }, 300);

    function createIceCreamEmoji() {
        const emoji = document.createElement('div');
        emoji.textContent = '🍦';
        emoji.style.position = 'absolute';
        emoji.style.left = `${Math.random() * window.innerWidth}px`;
        emoji.style.top = '-50px';
        emoji.style.fontSize = '24px';
        emoji.style.transition = 'top 5s linear';
        document.body.appendChild(emoji);

        setTimeout(() => {
            emoji.style.top = `${window.innerHeight}px`;
            setTimeout(() => {
                document.body.removeChild(emoji);
            }, 5000);
        }, 0);
    }
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
