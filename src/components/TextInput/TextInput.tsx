import React from 'react';
import cx from 'classnames';

type Props = {
    name: string;
    value: string;
    handler: (event: React.ChangeEvent<HTMLInputElement>) => void;
    isHidden?: boolean;
};

export const TextInput = ({ name, value, handler, isHidden }: Props) => {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-slate-100">{name}</label>
            <input
                className={cx(
                    'bg-slate-800 border border-solid border-slate-600 rounded-md p-2 text-slate-100 w-full box-border'
                )}
                type={isHidden ? 'password' : 'text'}
                onChange={handler}
                value={value}
            />
        </div>
    );
};
