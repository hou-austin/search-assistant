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
import { searchRankingColorMap } from '../utils/utils';

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

    window.addEventListener('load', (event) => {
        const searchResults = formatSearchResultsForGPT(getSearchResults());
        console.log(searchResults);

        getGPTSearchRanking(getSearchQuery(), searchResults).then((res) => {
            console.log(res);
            propagateSearchRankings(res);
        });
    });

    const root = createRoot(container);
    root.render(<GPTSearchCard />);
}

init();

const propagateSearchRankings = (searchRankings: number[]) => {
    const searchResults = document.querySelectorAll(
        '.MjjYud>.g.Ww4FFb.vt6azd.tF2Cxc'
    ) as NodeListOf<HTMLElement>;

    searchResults.forEach((searchResult, index) => {
        const ranking = searchRankings[index];
        const rankingBlock = document.createElement('div');
        rankingBlock.style.backgroundColor = `${searchRankingColorMap[ranking]}`;
        rankingBlock.style.width = '3px';
        rankingBlock.style.position = 'absolute';
        rankingBlock.style.top = '0';
        rankingBlock.style.left = '-20px';
        rankingBlock.style.height = '100%';
        rankingBlock.style.borderRadius = '5px';
        searchResults[index].parentElement.style.position = 'relative';
        searchResults[index].parentElement.appendChild(rankingBlock);
    });
};
