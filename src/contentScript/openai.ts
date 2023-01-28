import { getStorageItem } from '../utils/utils';

export const getGPTResult = async (inputValue: string) => {
    const openaiKey = await getStorageItem('openaiKey');

    const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${openaiKey}`,
        },
        body: JSON.stringify({
            prompt: inputValue,
            max_tokens: 512,
            temperature: 0,
            model: 'text-davinci-003',
        }),
    });

    const data = await response.json();
    const result = data.choices[0].text;

    return result.trim();
};
