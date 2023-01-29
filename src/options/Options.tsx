import React, { useEffect } from 'react';
import { getStorageItemSync, setStorageItemSync } from '../utils/storage';
import cx from 'classnames';
import { Card } from '../components/Card/Card';
import { TextInput } from '../components/TextInput/TextInput';

export const Options = () => {
    const [openaiKey, setOpenaiKey] = React.useState('');
    const [memaiKey, setMemaiKey] = React.useState('');

    useEffect(() => {
        getStorageItemSync('openaiKey').then((key) => {
            setOpenaiKey(key);
        });

        getStorageItemSync('memaiKey').then((key) => {
            setMemaiKey(key);
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

    return (
        <div className={cx('bg-neutral-800 h-full min-h-screen py-8 px-8')}>
            <div className={cx('max-w-screen-lg mx-auto')}>
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
            </div>
        </div>
    );
};
