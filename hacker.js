(function() {
    // Create the hacker overlay element
    const hackerOverlay = document.createElement('div');
    hackerOverlay.id = 'hacker-easter-egg';
    hackerOverlay.innerHTML = `<img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1920&q=80" alt="Hacker">`;
    document.body.appendChild(hackerOverlay);

    // Add styles for the hacker overlay
    const styles = `
    #hacker-easter-egg {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 20000;
        pointer-events: none;
        opacity: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: black;
        transition: opacity 0.5s ease-in-out;
    }
    #hacker-easter-egg img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    #hacker-easter-egg.active {
        opacity: 1;
    }
    `;
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    let clickTimes = [];
    let isShowing = false;

    window.addEventListener('click', () => {
        if (isShowing) return;

        const now = Date.now();
        clickTimes.push(now);

        // Keep only clicks from the last 1 second
        clickTimes = clickTimes.filter(time => now - time < 1000);

        if (clickTimes.length >= 10) {
            triggerHacker();
        }
    });

    function triggerHacker() {
        isShowing = true;
        clickTimes = []; // Reset
        hackerOverlay.classList.add('active');

        // Fade out after 0.5s of being fully visible
        // Total duration: 0.5s fade in + 0.5s fade out = 1s total interaction
        // As per request: "fade in for 0.5 seconds and fade out"
        setTimeout(() => {
            hackerOverlay.classList.remove('active');
            setTimeout(() => {
                isShowing = false;
            }, 500); // Wait for fade out to finish
        }, 500); // Stay visible for 0.5s then start fading out
    }
})();
