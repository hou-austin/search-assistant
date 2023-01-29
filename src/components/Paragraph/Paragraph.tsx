import React from 'react';

import cx from 'classnames';

type Props = {
    clickHandler: (event: React.MouseEvent) => void;
    children: React.ReactNode;
    reactToHover?: boolean;
    hoverComponent?: React.ReactNode;
};

export const Paragraph = ({
    clickHandler,
    children,
    hoverComponent,
}: Props) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <p
            className={cx('text-neutral-100 relative')}
            onClick={clickHandler}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}
            {isHovered && hoverComponent}
        </p>
    );
};
