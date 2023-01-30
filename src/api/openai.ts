import { getStorageItemSync } from '../utils/storage';

export const getGPTResult = async (query: string) => {
    const openaiKey = await getStorageItemSync('openaiKey');
    const prompt = `Act like a program that explains a query or solves it like a wiki.\nQuery: ${query}\n\nResult (keep it concise and easy to understand): `;

    const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${openaiKey}`,
        },
        body: JSON.stringify({
            prompt,
            max_tokens: 256,
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
    const prompt = `Rank the search results in a list of integers 0 to 5, separated by commas (example: x,x,x), based on relevancy.\n\nQuery: ${query}\n\nSearch Results:\n${searchResults}\n\nRank the search results in a list of integers 0 to 5, separated by commas (example: x,x,x), based on relevancy.`;

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
            const maxValue = Math.max(...ranking);

            if (maxValue > 5) {
                const newRanking = ranking.map((x) =>
                    Math.round((x / maxValue) * 5)
                );
                return newRanking;
            }

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

export const getGPTAlternativeSearch = async (query: string) => {
    const prompt = `Task: Generate a single query. Make it better, concise, more informed, precise, properly spelled, related, and useful. The generated query should take into consideration the intent of the original query. Be creative with the generation. The query is: ${query}\n\nQuery: `;

    const openaiKey = await getStorageItemSync('openaiKey');

    const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${openaiKey}`,
        },
        body: JSON.stringify({
            prompt,
            max_tokens: 20,
            n: 5,
            model: 'text-davinci-003',
        }),
    });

    const data = await response.json();
    // let result = data.choices[0].text.trim();
    // result = result.substring(result.indexOf('['));

    // const parsedResult = JSON.parse(result);

    // return parsedResult;

    let choices = data.choices.map((x: any) => x.text.trim());
    // remove duplicates
    choices = [...new Set(choices)];

    return choices;
};
