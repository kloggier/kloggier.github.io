const _ach = {
    'e1': { id: 'e1', hint: 'Man's best friend, but inverted', label: 'Doge' },
    'e2': { id: 'e2', hint: 'The gaze that persists', label: 'Watcher' },
    'e3': { id: 'e3', hint: '...', label: 'Void' },
    'e4': { id: 'e4', hint: 'The factory of meat', label: 'Slaughterhouse' },
    'e5': { id: 'e5', hint: 'The bloodline', label: 'Bloodlust' },
    'h1': { id: 'h1', hint: 'Look to the footer', label: 'Observer' },
    'h2': { id: 'h2', hint: 'Find the 1px ghost', label: 'Ghost' },
    'h3': { id: 'h3', hint: 'Speed is key', label: 'Speed' },
    'hidden': { id: 'hidden', hint: '???', label: 'Secret' }
};

function unlock(id) {
    let k = JSON.parse(localStorage.getItem('_v') || '{}');
    k[id] = 1;
    localStorage.setItem('_v', JSON.stringify(k));
}

function getVaultData() {
    return {
        state: JSON.parse(localStorage.getItem('_v') || '{}'),
        ach: _ach
    };
}
