import React from 'react';
import cx from 'classnames';
import { searchRankingColorMap } from './utils';
import {
    formatSearchResultsForGPT,
    getSearchQuery,
    getSearchResults,
} from '../utils';
import { getGPTSearchRanking } from '../../api/openai';
import { createRoot } from 'react-dom/client';
import { SearchResult } from '../utils';

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
        const searchResults = getSearchResults();
        const formattedSearchResults = formatSearchResultsForGPT(searchResults);

        getGPTSearchRanking(getSearchQuery(), formattedSearchResults).then(
            (res) => {
                propagateGPTSearchRankComponents(res, searchResults);
            }
        );
    });
};

const propagateGPTSearchRankComponents = (
    searchRankings: number[],
    searchResults: SearchResult[]
) => {
    const searchResultContainer = document.querySelector('.v7W49e');
    const searchResultElements = Array.from(
        searchResultContainer.children as HTMLCollectionOf<HTMLElement>
    );

    let searchResultIndex = 0;
    searchResultElements.forEach((element) => {
        const titleElement = element.querySelector('.LC20lb.MBeuO.DKV0Md');
        if (!titleElement) {
            return;
        }

        const url = titleElement.parentElement.getAttribute('href');
        if (url !== searchResults[searchResultIndex].url) {
            return;
        }
        const multipleItemsElement = element.querySelector('.eJH8qe.adDDi');
        if (multipleItemsElement) {
            return;
        }

        const ranking = searchRankings[searchResultIndex];
        element.style.position = 'relative';
        const container = document.createElement('div');
        container.className =
            'search-assistant-ranking-container absolute w-full h-full top-0 left-0 z-[-1]';
        element.appendChild(container);

        const searchRankRoot = createRoot(container);
        searchRankRoot.render(<GPTSearchRank rank={ranking} />);
        searchResultIndex++;
    });
};
