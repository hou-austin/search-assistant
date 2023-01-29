import React from 'react';
import cx from 'classnames';

type Props = {
    title?: string;
    children: React.ReactNode;
    className?: string;
};

export const Card = ({ title, children, className }: Props) => {
    return (
        <div
            className={cx(
                'border border-solid border-amber-400/20 bg-slate-900 p-5 rounded-xl mb-8 box-border relative w-full',
                className
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
