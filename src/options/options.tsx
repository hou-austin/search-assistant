import React from 'react';
import { createRoot } from 'react-dom/client';

import '../styles/tailwind.scss';
import './styles.scss';
import cx from 'classnames';
import { getStorageItem, setStorageItem } from '../utils/utils';

const Options = () => {
    const handleOpenAIKeyChange = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { value } = event.target;
        await setStorageItem('openaiKey', value);
    };

    return (
        <div className={cx('bg-neutral-800 h-full min-h-screen py-8')}>
            <div className={cx('max-w-screen-lg mx-auto')}>
                <div
                    className={cx(
                        'border border-solid border-slate-600 bg-slate-900 p-6 rounded-xl mb-8 box-border'
                    )}
                >
                    <div className="text-2xl mb-4 text-slate-100">API Keys</div>
                    <div className="text-slate-100">
                        <div className="mb-2">
                            <div className="text-slate-100 mb-2">
                                OpenAI API Key
                            </div>
                            <input
                                className={cx(
                                    'bg-slate-800 border border-solid border-slate-600 rounded-md p-2 text-slate-100 w-full box-border'
                                )}
                                type="text"
                                onChange={handleOpenAIKeyChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const optionsElement = document.createElement('div');
document.body.appendChild(optionsElement);

if (!optionsElement) {
    throw new Error('Can not find optionsElement');
}

const popupRoot = createRoot(optionsElement);
popupRoot.render(<Options />);
