import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import { getGPTResult } from '../../api/openai';
import BarLoader from 'react-spinners/BarLoader';
import { MdContentCopy } from 'react-icons/md';

import { getSearchQuery } from '../utils';
import { Card } from '../../components/Card/Card';
import { Button } from '../../components/Button/Button';
import { Paragraph } from '../../components/Paragraph/Paragraph';

import { getStaticAsset } from '../../utils/static';
import { createMemFromSearch } from '../../api/memai';

const propagateParagraphs = (openaiResponse: string) => {
    const paragraphClickHandler = async (value) => {
        await navigator.clipboard.writeText(value);
    };

    const splitResponse = openaiResponse.split('\n');
    return splitResponse.map((paragraph, index) => {
        const clipboardButton = (
            <div
                className={cx(
                    'absolute h-full left-0 ml-[-34px] flex items-center top-0'
                )}
                key={`copy-${index}`}
            >
                <Button
                    className={
                        'rounded-full bg-neutral-800/60 backdrop-blur-sm saturate-200'
                    }
                    color={'light'}
                    round
                >
                    <MdContentCopy />
                </Button>
            </div>
        );

        return (
            <Paragraph
                clickHandler={() => paragraphClickHandler(paragraph)}
                reactToHover={true}
                hoverComponent={clipboardButton}
                key={`paragraph-${index}`}
            >
                {paragraph}
            </Paragraph>
        );
    });
};

function GPTSearchCard() {
    const [openaiResponse, setOpenaiResponse] = useState<string>();
    const [mouseIn, setMouseIn] = useState(false);

    const query = getSearchQuery();

    useEffect(() => {
        getGPTResult(query).then((response) => {
            setOpenaiResponse(response);
        });
    }, []);

    const copyToClipboardHandler = async () => {
        await navigator.clipboard.writeText(openaiResponse);
    };

    const sendToMemaiHandler = async () => {
        await createMemFromSearch(query, openaiResponse);
    };

    return (
        <div
            onMouseEnter={() => setMouseIn(true)}
            onMouseLeave={() => setMouseIn(false)}
        >
            <Card className={'gpt-search-card'} useGradientBg>
                <div
                    className={cx(
                        'text-lg text-neutral-100 flex justify-between',
                        {
                            'mb-2': openaiResponse,
                        }
                    )}
                >
                    <span>Search Assistant</span>
                    <span className={'flex flex-row gap-2'}>
                        <Button
                            handler={copyToClipboardHandler}
                            opaqueOnHover={true}
                            visible={mouseIn}
                        >
                            <MdContentCopy />
                        </Button>
                        <Button
                            handler={sendToMemaiHandler}
                            opaqueOnHover={true}
                            visible={mouseIn}
                        >
                            <img
                                className={
                                    'opacity-40 hover:opacity-100 duration-200'
                                }
                                src={getStaticAsset('images/memai_16x16.png')}
                            />
                        </Button>
                    </span>
                </div>
                {openaiResponse && (
                    <span className="whitespace-pre-wrap text-neutral-300">
                        {propagateParagraphs(openaiResponse)}
                    </span>
                )}
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
                            loading={!openaiResponse}
                            color={'#fbbf24'}
                            width={'100%'}
                            height={2}
                        />
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default GPTSearchCard;
