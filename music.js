(function() {
    // Create the control button
    const musicBtn = document.createElement('button');
    musicBtn.id = 'music-toggle';
    musicBtn.innerText = '🔊 Play Music';
    document.body.appendChild(musicBtn);

    const styles = `
    #music-toggle {
        position: fixed;
        bottom: 10px;
        right: 110px;
        z-index: 10000;
        padding: 5px 10px;
        background: #4f46e5;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 12px;
        opacity: 0.7;
        transition: opacity 0.3s;
    }
    #music-toggle:hover {
        opacity: 1;
    }
    #music-iframe-container {
        position: fixed;
        top: -100px;
        left: -100px;
        width: 1px;
        height: 1px;
        overflow: hidden;
        z-index: -1;
        opacity: 0.01;
    }
    `;
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    const iframeContainer = document.createElement('div');
    iframeContainer.id = 'music-iframe-container';
    document.body.appendChild(iframeContainer);

    // Using a more direct iframe approach with postMessage control
    const videoId = 'fN1C_KuQBaU';
    const iframe = document.createElement('iframe');
    iframe.id = 'music-player-iframe';
    iframe.src = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=0&loop=1&playlist=${videoId}&controls=0&disablekb=1&modestbranding=1`;
    iframe.allow = "autoplay";
    iframeContainer.appendChild(iframe);

    let isPlaying = false;

    musicBtn.addEventListener('click', () => {
        if (!isPlaying) {
            // Send play command via postMessage
            iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
            iframe.contentWindow.postMessage('{"event":"command","func":"setVolume","args":[50]}', '*');
            musicBtn.innerText = '🔇 Music Playing (50%)';
            musicBtn.style.background = '#10b981';
            isPlaying = true;
        } else {
            iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
            musicBtn.innerText = '🔊 Play Music';
            musicBtn.style.background = '#4f46e5';
            isPlaying = false;
        }
    });

    // Ensure volume stays at 50%
    setInterval(() => {
        if (isPlaying) {
            iframe.contentWindow.postMessage('{"event":"command","func":"setVolume","args":[50]}', '*');
        }
    }, 5000);
})();
