export const getSearchQuery = () => {
    const input: HTMLInputElement = document.querySelector('input[name="q"]');

    return input?.value;
};

type SearchResult = {
    title: string;
    description: string;
    url: string;
};
export const getSearchResults = (): SearchResult[] => {
    const titleElements = document.querySelectorAll(
        '.MjjYud .tF2Cxc>.yuRUbf>a>.LC20lb.MBeuO.DKV0Md'
    );
    const titles = Array.from(titleElements).map(
        (element) => element.textContent
    );

    const urlElements = document.querySelectorAll('.MjjYud .tF2Cxc>.yuRUbf>a');
    const urls = Array.from(urlElements).map((element) =>
        element.getAttribute('href')
    );

    const descriptionElements = document.querySelectorAll(
        '.MjjYud .VwiC3b.yXK7lf.MUxGbd.yDYNvb.lyLwlc.lEBKkf'
    );
    const descriptions = Array.from(descriptionElements).map(
        (element) => element.textContent
    );

    const results = titles.map((title, index) => ({
        title,
        description: descriptions[index],
        url: urls[index],
    }));

    return results;
};

export const formatSearchResultsForGPT = (results: SearchResult[]) => {
    let formattedResults = '';

    results.forEach((result, index) => {
        formattedResults += `Result: ${index + 1}\nTitle: ${
            result.title
        } \nURL: ${result.url}\nDescription: ${result.description}\n\n`;
    });

    return formattedResults;
};
