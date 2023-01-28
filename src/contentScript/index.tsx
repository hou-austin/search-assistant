import React from 'react';
import {
    formatSearchResultsForGPT,
    getSearchQuery,
    getSearchResults,
} from './utils';
import GPTSearchCard from './GPTSearchCard/GPTSearchCard';

import './styles.scss';
import { createRoot } from 'react-dom/client';
import { getGPTSearchRanking } from './openai';
import { propagateGPTSearchRank } from './GPTSearchRank/GPTSearchRank';

async function init() {
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
}

init();
