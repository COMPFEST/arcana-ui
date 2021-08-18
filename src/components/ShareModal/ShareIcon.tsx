import React, { ReactNode } from 'react';

export interface IconShareProps {
    src: ReactNode;
    url: string;
    target: Location | string;
}

const ShareIcon: React.FC<IconShareProps> = (props) => {
    const { src, url, target } = props;
    return (
        <a href={`${url}${target}`} target="_blank" rel="noreferrer">
            <div className="share-button">
                <img src={`/${src}`} alt="line" />
            </div>
        </a>
    );
};

export default ShareIcon;
