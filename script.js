document.addEventListener('mousemove', function(e) {
    const emoji = document.createElement('div');
    emoji.textContent = '🍦';
    emoji.style.position = 'absolute';
    emoji.style.left = `${e.clientX}px`;
    emoji.style.top = `${e.clientY}px`;
    emoji.style.fontSize = '24px';
    emoji.style.transition = 'opacity 1s ease';
    document.body.appendChild(emoji);
    
    setTimeout(() => {
        emoji.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(emoji);
        }, 1000);
    }, 500);
});
