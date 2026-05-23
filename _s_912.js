const _ach = {
    'e1': { id: 'e1', hint: "Man's best friend, but inverted", label: 'Doge', val: 10 },
    'e2': { id: 'e2', hint: 'The gaze that persists', label: 'Watcher', val: 15 },
    'e3': { id: 'e3', hint: '...', label: 'Void', val: 20 },
    'e4': { id: 'e4', hint: 'The factory of meat', label: 'Slaughterhouse', val: 50 },
    'e5': { id: 'e5', hint: 'The bloodline', label: 'Bloodlust', val: 50 },
    'h1': { id: 'h1', hint: 'Look to the footer', label: 'Observer', val: 5 },
    'h2': { id: 'h2', hint: 'Find the 1px ghost', label: 'Ghost', val: 5 },
    'h3': { id: 'h3', hint: 'Speed is key', label: 'Speed', val: 10 },
    'h5': { id: 'h5', hint: 'Switch the light', label: 'Light Mode', val: 5 },
    'black_market': { id: 'black_market', hint: 'Access the restricted zone', label: 'Market Access', val: 0 },
    'creator_access': { id: 'creator_access', hint: 'Master of the site', label: 'Site Creator', val: 0 },
    'hidden': { id: 'hidden', hint: '???', label: 'Secret', val: 100 }
};

const _presets = {
    'Red Sky': { type: 'css', value: 'body { background: #300 !important; }' },
    'Neon Blue': { type: 'css', value: 'body { color: #00f2ff !important; }' },
    'Big Text': { type: 'css', value: 'h1 { font-size: 5rem !important; }' }
};

function unlock(id) {
    let k = JSON.parse(localStorage.getItem('_v') || '{}');
    if (!k[id]) {
        k[id] = 1;
        let c = parseInt(localStorage.getItem('_c') || '0');
        c += (_ach[id]?.val || 0);
        localStorage.setItem('_c', c.toString());
        localStorage.setItem('_v', JSON.stringify(k));
    }
}

function getVaultData() {
    try {
        return {
            state: JSON.parse(localStorage.getItem('_v') || '{}'),
            ach: _ach,
            coins: parseInt(localStorage.getItem('_c') || '0')
        };
    } catch (e) {
        return { state: {}, ach: _ach, coins: 0 };
    }
}

function initTheme() {
    // Default to dark if no setting exists, otherwise respect the stored setting
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || !savedTheme) {
        document.body.classList.add('dark-mode');
        if (!savedTheme) localStorage.setItem('theme', 'dark');
    }
    
    // Process Blocks
    const activeBlocks = JSON.parse(localStorage.getItem('_activeBlocks') || '[]');
    const allBlocks = { ...JSON.parse(localStorage.getItem('_blocks') || '{}'), ..._presets };
    
    activeBlocks.forEach(name => {
        const b = allBlocks[name];
        if (!b) return;
        if (b.type === 'css') {
            const style = document.createElement('style');
            style.innerText = b.value;
            document.head.appendChild(style);
        } else if (b.type === 'text') {
            const div = document.createElement('div');
            div.innerText = b.value;
            document.body.appendChild(div);
        } else if (b.type === 'picture') {
            const img = document.createElement('img');
            img.src = b.value;
            img.style.width = '200px';
            document.body.appendChild(img);
        } else if (b.type === 'redirect') {
            const a = document.createElement('a');
            a.href = b.value;
            a.innerText = "External Link";
            document.body.appendChild(a);
        }
    });
}
