import React from 'react';
import { getSearchQuery } from './utils';
import GPTSearchCard from './GPTSearchCard/GPTSearchCard';

import './styles.scss';
import { createRoot } from 'react-dom/client';

async function init() {
    const searchQuery = getSearchQuery();

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

    const root = createRoot(container);
    root.render(<GPTSearchCard query={searchQuery} />);
}

init();
