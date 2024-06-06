function togglePlayPause() {
    const audio = document.getElementById('background-audio');
    const button = document.getElementById('play-pause-button');

    if (audio.paused) {
        audio.play();
        button.textContent = 'Pause';
    } else {
        audio.pause();
        button.textContent = 'Play';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('play-pause-button');
    button.addEventListener('click', togglePlayPause);
    
    // Add falling ice cream emojis
    const emojis = ['🍦', '🍧', '🍨'];
    const numEmojis = 10;
    for (let i = 0; i < numEmojis; i++) {
        let emoji = document.createElement('div');
        emoji.className = 'ice-cream-emoji';
        emoji.style.left = `${Math.random() * 100}vw`;
        emoji.style.animationDuration = `${Math.random() * 3 + 2}s`;
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        document.body.appendChild(emoji);
    }
});
