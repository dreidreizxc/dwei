document.addEventListener('DOMContentLoaded', function() {
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach(heart => {
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDelay = Math.random() * 6 + 's';
    });

    const openBtn = document.getElementById('openBtn');
    const envelope = document.querySelector('.envelope');
    let step = 0; // Track the current step: 0 = closed, 1 = opened with first message, 2 = second message

    openBtn.addEventListener('click', function() {
        const audio = document.getElementById('background-music');
        if (step === 0) {
            // Open the envelope and show first message
            envelope.classList.add('opened');
            openBtn.textContent = 'Next';
            step = 1;
            // Start playing music on first interaction
            audio.play().catch(e => console.log('Audio play failed:', e));
        } else if (step === 1) {
            // Transition to second message
            envelope.classList.add('next');
            openBtn.textContent = 'Close';
            step = 2;
        } else if (step === 2) {
            // Close the envelope (optional reset)
            envelope.classList.remove('opened', 'next');
            openBtn.textContent = 'Open the Envelope';
            step = 0;
        }
    });
});