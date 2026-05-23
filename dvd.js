(function() {
    window.dvdClickable = false;
    const dvdLogo = document.createElement('div');
    dvdLogo.id = 'dvd-logo';
    dvdLogo.innerHTML = `
    <svg width="120" height="54" viewBox="0 0 120 54" xmlns="http://www.w3.org/2000/svg">
        <g fill="currentColor">
            <path d="M22.2,7.4c-4.4,0-8.2,1.5-10.7,4.1c-2.5,2.6-3.8,6.2-3.8,10.2c0,3.9,1.3,7.5,3.8,10.1c2.5,2.6,6.3,4.1,10.7,4.1h7.3V7.4H22.2z M22.2,31.7c-2.8,0-5.1-0.9-6.6-2.5c-1.5-1.6-2.3-3.8-2.3-6.5c0-2.7,0.8-4.9,2.3-6.5c1.5-1.6,3.8-2.5,6.6-2.5h2.9v18H22.2z"/>
            <path d="M48.2,7.4l-5.3,13.4l-5.3-13.4h-5.4l8.3,20.1l-2.4,5.8l-0.1,0.2H42l8.3-20.1H48.2z"/>
            <path d="M68.5,7.4c-4.4,0-8.2,1.5-10.7,4.1c-2.5,2.6-3.8,6.2-3.8,10.2c0,3.9,1.3,7.5,3.8,10.1c2.5,2.6,6.3,4.1,10.7,4.1h7.3V7.4H68.5z M68.5,31.7c-2.8,0-5.1-0.9-6.6-2.5c-1.5-1.6-2.3-3.8-2.3-6.5c0-2.7,0.8-4.9,2.3-6.5c1.5-1.6,3.8-2.5,6.6-2.5h2.9v18H68.5z"/>
            <path d="M12.5,45.1c-1.8,0-3.3,0.3-4.4,0.8c-1.1,0.5-1.7,1.1-1.7,1.7c0,1.3,2.7,2.4,6.1,2.4c3.4,0,6.1-1.1,6.1-2.4c0-0.6-0.6-1.2-1.7-1.7C15.8,45.4,14.3,45.1,12.5,45.1z" transform="scale(3.5, 0.8) translate(-6, 0)"/>
        </g>
        <text x="60" y="50" font-family="Arial, sans-serif" font-size="9" font-weight="bold" text-anchor="middle" fill="currentColor" letter-spacing="4">VIDEO</text>
        <ellipse cx="60" cy="48" rx="55" ry="5" fill="none" stroke="currentColor" stroke-width="1.5"/>
    </svg>
    `;

    document.body.appendChild(dvdLogo);

    dvdLogo.addEventListener('click', () => {
        if (window.dvdClickable) {
            window.location.href = 'tictactoe.html';
        }
    });

    const toggleBtn = document.createElement('button');
    toggleBtn.id = 'dvd-toggle';
    toggleBtn.innerText = 'Disable DVD';
    document.body.appendChild(toggleBtn);

    const styles = `
    #dvd-logo {
        position: fixed;
        z-index: 9999;
        width: 120px;
        height: 54px;
        pointer-events: auto;
        opacity: 0.8;
        transition: opacity 0.5s ease;
        color: #ff0000;
        filter: drop-shadow(0 0 5px rgba(0,0,0,0.5));
    }
    #dvd-logo:hover {
        opacity: 0;
    }
    #dvd-toggle {
        position: fixed;
        bottom: 10px;
        right: 10px;
        z-index: 10000;
        padding: 5px 10px;
        background: #ef4444;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 12px;
        opacity: 0.7;
        transition: opacity 0.3s;
    }
    #dvd-toggle:hover {
        opacity: 1;
    }
    .captcha-overlay {
        position: fixed;
        top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.8);
        display: none;
        align-items: center;
        justify-content: center;
        z-index: 10001;
        color: white;
        text-align: center;
    }
    .captcha-box {
        background: #1f2937;
        padding: 2rem;
        border-radius: 1rem;
        border: 2px solid #ef4444;
    }
    .captcha-box h3 { margin-bottom: 10px; }
    .captcha-box input {
        padding: 10px;
        margin: 10px 0;
        border-radius: 4px;
        border: none;
        width: 100%;
        color: black;
    }
    .captcha-box button {
        padding: 10px 20px;
        background: #ef4444;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    const captchaOverlay = document.createElement('div');
    captchaOverlay.className = 'captcha-overlay';
    captchaOverlay.innerHTML = `
        <div class="captcha-box">
            <h3 id="captcha-title">Solve to Disable DVD</h3>
            <p id="captcha-question"></p>
            <input type="text" id="captcha-answer" placeholder="Your answer">
            <button id="captcha-submit">Submit</button>
            <button id="captcha-cancel" style="background: #6b7280; margin-left: 10px;">Cancel</button>
        </div>
    `;
    document.body.appendChild(captchaOverlay);

    let captchaSolution = 0;
    let isDvdEnabled = true;

    toggleBtn.addEventListener('click', () => {
        if (isDvdEnabled) {
            const a = Math.floor(Math.random() * 20);
            const b = Math.floor(Math.random() * 20);
            captchaSolution = a + b;
            document.getElementById('captcha-title').innerText = 'Solve to Disable DVD';
            document.getElementById('captcha-question').innerText = `What is ${a} + ${b}?`;
        } else {
            const a = Math.floor(Math.random() * 15) + 11;
            const b = Math.floor(Math.random() * 15) + 11;
            captchaSolution = a * b;
            document.getElementById('captcha-title').innerText = 'Solve to Enable DVD (Hard Mode)';
            document.getElementById('captcha-question').innerText = `What is ${a} × ${b}?`;
        }
        document.getElementById('captcha-answer').value = '';
        captchaOverlay.style.display = 'flex';
    });

    document.getElementById('captcha-submit').addEventListener('click', () => {
        const val = parseInt(document.getElementById('captcha-answer').value);
        if (val === captchaSolution) {
            isDvdEnabled = !isDvdEnabled;
            if (isDvdEnabled) {
                dvdLogo.style.display = 'block';
                toggleBtn.innerText = 'Disable DVD';
                toggleBtn.style.background = '#ef4444';
                update();
            } else {
                dvdLogo.style.display = 'none';
                toggleBtn.innerText = 'Enable DVD';
                toggleBtn.style.background = '#10b981';
            }
            captchaOverlay.style.display = 'none';
        } else {
            alert('Wrong answer! Challenge failed.');
            captchaOverlay.style.display = 'none';
        }
    });

    document.getElementById('captcha-cancel').addEventListener('click', () => {
        captchaOverlay.style.display = 'none';
    });

    let x = Math.random() * (window.innerWidth - 120);
    let y = Math.random() * (window.innerHeight - 54);
    let dx = 1.5;
    let dy = 1.5;

    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffa500', '#ffffff'];
    let colorIndex = 0;

    function update() {
        if (!isDvdEnabled) return;
        
        const width = window.innerWidth;
        const height = window.innerHeight;

        if (x + 120 >= width || x <= 0) {
            dx = -dx;
            changeColor();
        }
        if (y + 54 >= height || y <= 0) {
            dy = -dy;
            changeColor();
        }

        x += dx;
        y += dy;

        dvdLogo.style.left = x + 'px';
        dvdLogo.style.top = y + 'px';

        requestAnimationFrame(update);
        }

        requestAnimationFrame(update);
    }

    function changeColor() {
        colorIndex = (colorIndex + 1) % colors.length;
        dvdLogo.style.color = colors[colorIndex];
    }

    update();

    window.addEventListener('resize', () => {
        x = Math.min(x, window.innerWidth - 120);
        y = Math.min(y, window.innerHeight - 54);
    });
})();
