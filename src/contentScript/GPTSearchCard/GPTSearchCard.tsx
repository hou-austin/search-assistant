import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import '../../styles/tailwind.scss';
import { getGPTResult } from '../openai';
import BarLoader from 'react-spinners/BarLoader';

import './styles.scss';
import { getSearchQuery } from '../utils';

function GPTSearchCard() {
    const [openaiResponse, setOpenaiResponse] = useState<string>();

    useEffect(() => {
        getGPTResult(getSearchQuery()).then((response) => {
            setOpenaiResponse(response);
        });
    }, []);

    return (
        <div
            className={cx(
                'gpt-search-card',
                'border border-solid border-amber-400/20 bg-slate-900 p-5 rounded-xl mb-8 box-border relative overflow-hidden'
            )}
        >
            <div
                className={cx('text-lg text-neutral-100', {
                    'mb-2': openaiResponse,
                })}
            >
                Search Assistant
            </div>
            {openaiResponse && (
                <span className="whitespace-pre-wrap text-neutral-300">
                    {openaiResponse}
                </span>
            )}
            <div className={'absolute bottom-0 left-0 w-full'}>
                <BarLoader
                    loading={!openaiResponse}
                    color={'#fbbf24'}
                    width={'100%'}
                    height={2}
                />
            </div>
        </div>
    );
}

export default GPTSearchCard;
