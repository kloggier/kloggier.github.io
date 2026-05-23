const dvdLogo = document.createElement('div');
dvdLogo.id = 'dvd-logo';
dvdLogo.innerHTML = `
<svg width="100" height="45" viewBox="0 0 100 45" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.5 5.5C10.5 5.5 8.5 6.5 7.5 8.5C6.5 10.5 6.5 13.5 7.5 15.5C8.5 17.5 10.5 18.5 12.5 18.5H16.5V5.5H12.5ZM28.5 5.5H20.5V18.5H24.5V26.5L32.5 5.5H28.5ZM44.5 5.5C42.5 5.5 40.5 6.5 39.5 8.5C38.5 10.5 38.5 13.5 39.5 15.5C40.5 17.5 42.5 18.5 44.5 18.5H48.5V5.5H44.5ZM12.5 9.5H12.5C11.5 9.5 11.5 10.5 10.5 11.5C10.5 12.5 10.5 13.5 10.5 14.5C11.5 15.5 11.5 16.5 12.5 16.5H12.5V9.5ZM44.5 9.5H44.5C43.5 9.5 43.5 10.5 42.5 11.5C42.5 12.5 42.5 13.5 42.5 14.5C43.5 15.5 43.5 16.5 44.5 16.5H44.5V9.5ZM56.5 5.5H52.5V18.5H56.5C58.5 18.5 60.5 17.5 61.5 15.5C62.5 13.5 62.5 10.5 61.5 8.5C60.5 6.5 58.5 5.5 56.5 5.5ZM56.5 9.5C57.5 9.5 57.5 10.5 58.5 11.5C58.5 12.5 58.5 13.5 58.5 14.5C57.5 15.5 57.5 16.5 56.5 16.5H56.5V9.5Z" fill="currentColor"/>
    <ellipse cx="50" cy="35" rx="45" ry="10" fill="none" stroke="currentColor" stroke-width="2"/>
    <text x="50" y="38" font-family="Arial" font-size="8" text-anchor="middle" fill="currentColor">VIDEO</text>
</svg>
`;

document.body.appendChild(dvdLogo);

const styles = `
#dvd-logo {
    position: fixed;
    z-index: 9999;
    width: 100px;
    height: 45px;
    pointer-events: auto;
    opacity: 0.5;
    transition: opacity 0.5s ease;
    color: #ff0000;
}
#dvd-logo:hover {
    opacity: 0;
}
`;

const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

let x = Math.random() * (window.innerWidth - 100);
let y = Math.random() * (window.innerHeight - 45);
let dx = 2;
let dy = 2;

const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffa500'];
let colorIndex = 0;

function update() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (x + 100 >= width || x <= 0) {
        dx = -dx;
        changeColor();
    }
    if (y + 45 >= height || y <= 0) {
        dy = -dy;
        changeColor();
    }

    x += dx;
    y += dy;

    dvdLogo.style.left = x + 'px';
    dvdLogo.style.top = y + 'px';

    requestAnimationFrame(update);
}

function changeColor() {
    colorIndex = (colorIndex + 1) % colors.length;
    dvdLogo.style.color = colors[colorIndex];
}

update();

window.addEventListener('resize', () => {
    x = Math.min(x, window.innerWidth - 100);
    y = Math.min(y, window.innerHeight - 45);
});
