import { getStorageItemSync } from '../utils/storage';

export const getGPTResult = async (query: string) => {
    const openaiKey = await getStorageItemSync('openaiKey');

    const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${openaiKey}`,
        },
        body: JSON.stringify({
            prompt: query,
            max_tokens: 512,
            temperature: 0,
            model: 'text-davinci-003',
        }),
    });

    const data = await response.json();
    const result = data.choices[0].text;

    return result.trim();
};

export const getGPTSearchRanking = async (
    query: string,
    searchResults: string
) => {
    const prompt = `Query: ${query}\n\nSearch Results:\n${searchResults}\n\nRank the search results in a list of numbers, separated by commas (example: x,x,x), based on relevancy. Use integers between 0 to 5.`;

    const openaiKey = await getStorageItemSync('openaiKey');

    const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${openaiKey}`,
        },
        body: JSON.stringify({
            prompt,
            max_tokens: 50,
            temperature: 0,
            model: 'text-davinci-003',
        }),
    });

    const data = await response.json();
    const result = data.choices[0].text;

    try {
        const ranking = result
            .trim()
            .replace('\n', '')
            .split(',')
            .map((x) => parseInt(x));

        // Check if every element in ranking is an integer
        if (ranking.every((x) => Number.isInteger(x) && !Number.isNaN(x))) {
            return ranking;
        } else {
            throw new Error('Invalid response from OpenAI');
        }
    } catch (error) {
        console.log(
            'Invalid response from OpenAI for getGPTSearchRanking: ',
            result
        );
    }
};
