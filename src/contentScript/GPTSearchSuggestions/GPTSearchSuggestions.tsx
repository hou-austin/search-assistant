import React from 'react';
import { Card } from '../../components/Card/Card';
import { getSearchQuery } from '../utils';
import { getGPTAlternativeSearch } from '../../api/openai';
import cx from 'classnames';
import BarLoader from 'react-spinners/BarLoader';

export const GPTSearchSuggestions = () => {
    const query = getSearchQuery();
    const [suggestions, setSuggestions] = React.useState<string[]>(undefined);

    React.useEffect(() => {
        if (query) {
            getGPTAlternativeSearch(query).then((res) => {
                setSuggestions(res);
            });
        }
    }, [query]);

    const propagateSuggestions = () => {
        return suggestions.map((suggestion, index) => {
            return (
                <div key={`suggestion-${index}`}>
                    <a
                        className="text-amber-400 hover:text-amber-200 visited:text-amber-600"
                        href={`https://www.google.com/search?q=${suggestion}`}
                    >
                        {suggestion}
                    </a>
                </div>
            );
        });
    };

    return (
        <Card useGradientBg>
            <div className={cx('flex flex-col gap-2')}>
                <div
                    className={cx(
                        'text-lg text-neutral-100 flex justify-between',
                        {
                            'mb-2': suggestions,
                        }
                    )}
                >
                    <span>Search Suggestions</span>
                </div>
                {suggestions && propagateSuggestions()}
                <div
                    className={
                        'overflow-hidden absolute w-full h-full top-0 left-0 rounded-xl pointer-events-none'
                    }
                >
                    <div
                        className={
                            'absolute bottom-0 left-0 w-full rounded-b-xl'
                        }
                    >
                        <BarLoader
                            loading={!suggestions}
                            color={'#fbbf24'}
                            width={'100%'}
                            height={2}
                        />
                    </div>
                </div>
            </div>
        </Card>
    );
};
