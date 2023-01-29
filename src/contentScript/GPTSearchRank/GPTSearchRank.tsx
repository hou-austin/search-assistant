import React from 'react';
import cx from 'classnames';
import { searchRankingColorMap } from './utils';
import {
    formatSearchResultsForGPT,
    getSearchQuery,
    getSearchResults,
} from '../utils';
import { getGPTSearchRanking } from '../../api/openai';
import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';

type Props = {
    rank: number;
};

const GPTSearchRank = ({ rank }: Props) => {
    return (
        <div
            className={cx(
                'w-[3px] h-full absolute rounded-full ml-[-15px]',
                searchRankingColorMap[rank]
            )}
        ></div>
    );
};

export const propagateGPTSearchRank = () => {
    window.addEventListener('load', (event) => {
        const searchResults = formatSearchResultsForGPT(getSearchResults());
        console.log(searchResults);

        getGPTSearchRanking(getSearchQuery(), searchResults).then((res) => {
            console.log(res);
            propagateGPTSearchRankComponents(res);
        });
    });
};

const propagateGPTSearchRankComponents = (searchRankings: number[]) => {
    const searchResults = document.querySelectorAll(
        '.MjjYud>.g.Ww4FFb.vt6azd.tF2Cxc'
    ) as NodeListOf<HTMLElement>;

    searchResults.forEach((searchResult, index) => {
        const ranking = searchRankings[index];
        searchResults[index].parentElement.style.position = 'relative';
        const container = document.createElement('div');
        container.className =
            'search-assistant-ranking-container absolute w-full h-full top-0 left-0 z-[-1]';
        searchResults[index].parentElement.appendChild(container);

        const searchRankRoot = createRoot(container);
        searchRankRoot.render(<GPTSearchRank rank={ranking} />);
    });
};
