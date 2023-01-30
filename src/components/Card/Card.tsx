import React from 'react';
import cx from 'classnames';

import './styles.scss';

type Props = {
    title?: string;
    children: React.ReactNode;
    className?: string;
    useGradientBg?: boolean;
};

export const Card = ({ title, children, className, useGradientBg }: Props) => {
    return (
        <div
            className={cx(
                'font-google border border-solid border-amber-400/20 bg-slate-900 p-5 rounded-xl box-border relative w-full',
                className,
                {
                    'card-gradient-bg': useGradientBg,
                }
            )}
        >
            {title && (
                <div className={cx('text-lg text-neutral-100 mb-2')}>
                    {title}
                </div>
            )}
            {children}
        </div>
    );
};
