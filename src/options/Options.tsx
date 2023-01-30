import React, { useEffect } from 'react';
import { getStorageItemSync, setStorageItemSync } from '../utils/storage';
import cx from 'classnames';
import { Card } from '../components/Card/Card';
import { TextInput } from '../components/TextInput/TextInput';

export const Options = () => {
    const [openaiKey, setOpenaiKey] = React.useState('');
    const [memaiKey, setMemaiKey] = React.useState('');
    const [useSearchRanking, setUseSearchRanking] = React.useState(false);
    const [useSearchAssistant, setUseSearchAssistant] = React.useState(false);
    const [useSearchSuggestions, setUseSearchSuggestions] =
        React.useState(false);

    useEffect(() => {
        getStorageItemSync('openaiKey').then((key) => {
            setOpenaiKey(key);
        });

        getStorageItemSync('memaiKey').then((key) => {
            setMemaiKey(key);
        });

        getStorageItemSync('useSearchRanking').then((key) => {
            setUseSearchRanking(!!key);
        });

        getStorageItemSync('useSearchAssistant').then((key) => {
            setUseSearchAssistant(!!key);
        });

        getStorageItemSync('useSearchSuggestions').then((key) => {
            setUseSearchSuggestions(!!key);
        });
    }, []);

    const handleOpenaiApiInput = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { value } = event.target;
        setOpenaiKey(value);
        await setStorageItemSync('openaiKey', value);
    };

    const handleMemaiApiInput = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { value } = event.target;
        setMemaiKey(value);
        await setStorageItemSync('memaiKey', value);
    };

    const handleUseSearchRanking = async () => {
        await setStorageItemSync(
            'useSearchRanking',
            (!useSearchRanking).toString()
        );
        setUseSearchRanking(!useSearchRanking);
    };

    const handleUseSearchAssistant = async () => {
        await setStorageItemSync(
            'useSearchAssistant',
            (!useSearchAssistant).toString()
        );
        setUseSearchAssistant(!useSearchAssistant);
    };

    const handleUseSearchSuggestions = async () => {
        await setStorageItemSync(
            'useSearchSuggestions',
            (!useSearchSuggestions).toString()
        );
        setUseSearchSuggestions(!useSearchSuggestions);
    };

    return (
        <div className={cx('bg-neutral-800 h-full min-h-screen py-8 px-8')}>
            <div className={cx('max-w-screen-lg mx-auto flex flex-col gap-4')}>
                <Card title={'API Keys'}>
                    <div className={cx('flex flex-col gap-4')}>
                        <TextInput
                            name={'OpenAI API Key'}
                            value={openaiKey}
                            handler={handleOpenaiApiInput}
                        />
                        <TextInput
                            name={'MemAI API Key'}
                            value={memaiKey}
                            handler={handleMemaiApiInput}
                        />
                    </div>
                </Card>
                <Card title={'Settings'}>
                    <div className={cx('flex flex-col gap-4')}>
                        <div className="flex gap-4 items-center">
                            <input
                                type={'checkbox'}
                                checked={useSearchRanking}
                                onChange={handleUseSearchRanking}
                            />
                            <label className={cx('text-neutral-200')}>
                                Use search ranking
                            </label>
                        </div>
                        <div className="flex gap-4 items-center">
                            <input
                                type={'checkbox'}
                                checked={useSearchAssistant}
                                onChange={handleUseSearchAssistant}
                            />
                            <label className={cx('text-neutral-200')}>
                                Use search assistant
                            </label>
                        </div>
                        <div className="flex gap-4 items-center">
                            <input
                                type={'checkbox'}
                                checked={useSearchSuggestions}
                                onChange={handleUseSearchSuggestions}
                            />
                            <label className={cx('text-neutral-200')}>
                                Use search suggestions
                            </label>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};
