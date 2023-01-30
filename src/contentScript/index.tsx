import React from 'react';

import '../styles/tailwind.scss';
import './styles.scss';
import { createRoot } from 'react-dom/client';
import { propagateGPTSearchRank } from './GPTSearchRank/GPTSearchRank';
import { ContentScript } from './ContentScript';
import { getStorageItemSync } from '../utils/storage';

const init = async () => {
    const useSearchRank = !!(await getStorageItemSync('useSearchRanking'));

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

    if (useSearchRank) {
        propagateGPTSearchRank();
    }

    const root = createRoot(container);
    root.render(<ContentScript />);
};

init();
function useEffect(arg0: () => void, arg1: undefined[]) {
    throw new Error('Function not implemented.');
}
