// script.js

document.addEventListener('DOMContentLoaded', () => {
    const createEmoji = () => {
        const emoji = document.createElement('div');
        emoji.innerHTML = '🍦';
        emoji.classList.add('emoji');
        emoji.style.left = Math.random() * 100 + 'vw';
        emoji.style.animationDuration = Math.random() * 2 + 3 + 's';
        document.body.appendChild(emoji);

        setTimeout(() => {
            emoji.remove();
        }, 5000);
    };

    setInterval(createEmoji, 300);
});
