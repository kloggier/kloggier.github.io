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
    if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.body.classList.add('dark-mode');
    }
    // Apply active block modifications
    const activeBlocks = JSON.parse(localStorage.getItem('_activeBlocks') || '[]');
    const allBlocks = JSON.parse(localStorage.getItem('_blocks') || '{}');
    let finalCss = '';
    activeBlocks.forEach(name => {
        if (allBlocks[name]) finalCss += allBlocks[name] + '\n';
    });
    if (finalCss) {
        const style = document.createElement('style');
        style.innerText = finalCss;
        document.head.appendChild(style);
    }
}
