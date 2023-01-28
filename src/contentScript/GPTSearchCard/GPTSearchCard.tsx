import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import '../../styles/tailwind.scss';
import { getGPTResult } from '../openai';
import BarLoader from 'react-spinners/BarLoader';

import './styles.scss';

type Props = {
    query: string;
};

function GPTSearchCard({ query }: Props) {
    const [openaiResponse, setOpenaiResponse] = useState<string>();

    useEffect(() => {
        getGPTResult(query).then((response) => {
            setOpenaiResponse(response);
        });
    });

    return (
        <div
            className={cx(
                'gpt-search-card',
                'border border-solid border-amber-400/20 bg-slate-900 p-6 rounded-xl mb-8 box-border relative overflow-hidden'
            )}
        >
            <div
                className={cx('text-2xl text-slate-100', {
                    'mb-2': openaiResponse,
                })}
            >
                Search Assistant
            </div>
            {openaiResponse && (
                <span className="whitespace-pre-wrap text-slate-200">
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
