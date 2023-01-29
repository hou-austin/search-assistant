import React from 'react';
import { createRoot } from 'react-dom/client';

import '../styles/tailwind.scss';
import './styles.scss';

import { Options } from './Options';

const init = async () => {
    const container = document.createElement('div');
    container.className = 'options-container';

    const body = document.querySelector('body');
    body.appendChild(container);

    const root = createRoot(container);
    root.render(<Options />);
};

init();
