export const getSearchQuery = () => {
    const input: HTMLInputElement = document.querySelector('input[name="q"]');

    return input?.value;
};

export type SearchResult = {
    title: string;
    description: string;
    url: string;
};

export const getSearchResults = (): SearchResult[] => {
    const resultsContainer = document.querySelector('.v7W49e');
    const results = Array.from(resultsContainer.children);

    const searchResults = results.map((result) => {
        const titleElement = result.querySelector('.LC20lb.MBeuO.DKV0Md');
        const descriptionElement = result.querySelector(
            '.VwiC3b.yXK7lf.MUxGbd.yDYNvb.lyLwlc'
        );

        if (!titleElement || !descriptionElement) {
            return undefined;
        }

        const title = titleElement.textContent;
        const url = titleElement.parentElement.getAttribute('href');
        const description = descriptionElement.textContent;

        return {
            title,
            description,
            url,
        };
    });

    return searchResults.filter((result) => result) as SearchResult[];
};

export const formatSearchResultsForGPT = (results: SearchResult[]) => {
    let formattedResults = '';

    results.forEach((result, index) => {
        formattedResults += `Result: ${index + 1}\nTitle: ${
            result.title
        } \nDescription: ${result.description}\n\n`;
    });

    return formattedResults;
};
