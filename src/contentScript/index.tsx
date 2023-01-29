import React from 'react';
import GPTSearchCard from './GPTSearchCard/GPTSearchCard';

import '../styles/tailwind.scss';
import './styles.scss';
import { createRoot } from 'react-dom/client';
import { propagateGPTSearchRank } from './GPTSearchRank/GPTSearchRank';

const init = async () => {
    const container = document.createElement('div');
    container.className = 'search-assistant-container';

    const sideBarContainer = document.querySelector('#rhs');
    if (sideBarContainer) {
        sideBarContainer.prepend(container);
    } else {
        container.classList.add('no-sidebar');
        const appendContainer = document.querySelector('#rcnt') as HTMLElement;
        if (appendContainer) {
            appendContainer.appendChild(container);
        }
    }

    propagateGPTSearchRank();

    const root = createRoot(container);
    root.render(<GPTSearchCard />);
};

init();
