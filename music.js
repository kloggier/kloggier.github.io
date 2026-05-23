(function() {
    // Create music container
    const musicContainer = document.createElement('div');
    musicContainer.id = 'music-container';
    // Some browsers block 0x0 iframes, so we use 1x1 and hide it
    musicContainer.style.position = 'absolute';
    musicContainer.style.top = '-1000px';
    musicContainer.style.width = '1px';
    musicContainer.style.height = '1px';
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
    `;
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    // YouTube Player Instance
    let player;
    let isApiReady = false;

    // Load YouTube IFrame API
    if (!window.YT) {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    // Global callback for YT API
    window.onYouTubeIframeAPIReady = function() {
        isApiReady = true;
        player = new YT.Player('music-container', {
            height: '1',
            width: '1',
            videoId: 'fN1C_KuQBaU',
            playerVars: {
                'autoplay': 0,
                'loop': 1,
                'playlist': 'fN1C_KuQBaU',
                'controls': 0,
                'showinfo': 0,
                'modestbranding': 1
            },
            events: {
                'onReady': (event) => {
                    event.target.setVolume(50); // Set to 50% as requested
                    console.log('Music Player Ready at 50% volume');
                },
                'onStateChange': (event) => {
                    if (event.data === YT.PlayerState.ENDED) {
                        player.playVideo(); // Ensure loop works
                    }
                }
            }
        });
    };

    // If API already loaded (e.g. on navigation)
    if (window.YT && window.YT.Player && !player) {
        window.onYouTubeIframeAPIReady();
    }

    musicBtn.addEventListener('click', () => {
        if (!player || typeof player.playVideo !== 'function') {
            console.error('Player not ready');
            musicBtn.innerText = '⚠️ Error: Loading...';
            return;
        }

        const state = player.getPlayerState();
        if (state === YT.PlayerState.PLAYING) {
            player.pauseVideo();
            musicBtn.innerText = '🔇 Music Paused';
        } else {
            player.playVideo();
            musicBtn.innerText = '🔊 Music Playing (50%)';
        }
    });
})();
