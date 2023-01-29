import React from 'react';
import cx from 'classnames';

type Props = {
    handler?: (event: React.MouseEvent) => void;
    className?: string;
    children: React.ReactNode;
    opaqueOnHover?: boolean;
    visible?: boolean;
    color?: 'light' | 'dark';
    round?: boolean;
};

export const Button = ({
    handler,
    className,
    children,
    opaqueOnHover,
    visible = true,
    color = 'light',
    round = false,
}: Props) => {
    return (
        <button
            className={cx(
                'bg-transparent cursor-pointer flex items-center justify-center',
                opaqueOnHover
                    ? `${
                          color === 'light'
                              ? 'hover:text-neutral-100 text-neutral-100/40'
                              : 'hover:text-neutral-800 text-neutral-800/40'
                      } duration-200`
                    : `${
                          color === 'light'
                              ? 'text-neutral-100'
                              : 'text-neutral-800'
                      }`,
                {
                    'opacity-0 pointer-events-none': !visible,
                },
                className,
                round
                    ? 'w-7 h-7 border-[0.1px] border-solid border-amber-400/20'
                    : 'border-0'
            )}
            onClick={handler}
        >
            {children}
        </button>
    );
};
