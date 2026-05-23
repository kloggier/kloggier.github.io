const _ach = {
    'doge': { id: 'e1', hint: 'Man's best friend, but inverted' },
    'watching': { id: 'e2', hint: 'The gaze that persists' },
    'puzzle': { id: 'e3', hint: '...' },
    'slaughterhouse': { id: 'e4', hint: 'The factory of meat' },
    'bloodlust': { id: 'e5', hint: 'The bloodline' },
    'h1': { id: 'h1', hint: 'Look to the footer' },
    'h2': { id: 'h2', hint: 'Find the 1px ghost' },
    'h3': { id: 'h3', hint: 'Speed is key' },
    'tetris_win': { id: 'h4', hint: 'Master the falling cats' },
    'theme_flip': { id: 'h5', hint: 'Switch the light' },
    'black_market': { id: 'h6', hint: 'Access the restricted zone' },
    'hidden': { id: 'hidden', hint: '???' }
};

function unlock(id) {
    let k = JSON.parse(localStorage.getItem('_v') || '{}');
    k[id] = 1;
    localStorage.setItem('_v', JSON.stringify(k));
}

function checkAll() {
    let k = JSON.parse(localStorage.getItem('_v') || '{}');
    return Object.values(_ach).every(a => k[a.id]);
}
