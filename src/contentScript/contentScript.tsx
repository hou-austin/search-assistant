import React from 'react';
import GPTSearchCard from './GPTSearchCard/GPTSearchCard';
import { GPTSearchSuggestions } from './GPTSearchSuggestions/GPTSearchSuggestions';
import { getStorageItemSync } from '../utils/storage';

export const ContentScript = () => {
    const [useSearchAssistant, setUseSearchAssistant] = React.useState(false);
    const [useSearchSuggestions, setUseSearchSuggestions] =
        React.useState(false);

    React.useEffect(() => {
        getStorageItemSync('useSearchAssistant').then((key) => {
            setUseSearchAssistant(!!key);
        });

        getStorageItemSync('useSearchSuggestions').then((key) => {
            setUseSearchSuggestions(!!key);
        });
    }, []);

    return (
        <div className="flex flex-col gap-4">
            {useSearchSuggestions && <GPTSearchSuggestions />}
            {useSearchAssistant && <GPTSearchCard />}
        </div>
    );
};
