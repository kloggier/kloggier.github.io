(function() {
    // Create music container
    const musicContainer = document.createElement('div');
    musicContainer.id = 'music-container';
    musicContainer.style.display = 'none'; // Keep it hidden
    document.body.appendChild(musicContainer);

    // Create the control button
    const musicBtn = document.createElement('button');
    musicBtn.id = 'music-toggle';
    musicBtn.innerText = '🔊 Play Music';
    document.body.appendChild(musicBtn);

    const styles = `
    #music-toggle {
        position: fixed;
        bottom: 10px;
        right: 110px; /* Next to DVD toggle */
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
    `;
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    // Load YouTube IFrame API
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    let player;
    window.onYouTubeIframeAPIReady = function() {
        player = new YT.Player('music-container', {
            height: '0',
            width: '0',
            videoId: 'fN1C_KuQBaU',
            playerVars: {
                'autoplay': 0,
                'loop': 1,
                'playlist': 'fN1C_KuQBaU'
            },
            events: {
                'onReady': onPlayerReady
            }
        });
    };

    function onPlayerReady(event) {
        player.setVolume(1); // 1% volume
        
        // Try to autoplay if permitted, or wait for button
        musicBtn.addEventListener('click', () => {
            if (player.getPlayerState() === YT.PlayerState.PLAYING) {
                player.pauseVideo();
                musicBtn.innerText = '🔇 Music Paused';
            } else {
                player.playVideo();
                musicBtn.innerText = '🔊 Music Playing (1%)';
            }
        });
    }
})();
