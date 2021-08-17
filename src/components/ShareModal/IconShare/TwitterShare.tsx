import React from 'react';
import { IconShareProps } from './index';

const TwitterShare: React.FC<IconShareProps> = ({ url }) => (
    <a href={`https://twitter.com/intent/tweet?text=&url=${url}`} target="_blank" rel="noreferrer">
        <div className="share-button">
            <img src="/twitter.svg" alt="twitter" />
        </div>
    </a>
);

export default TwitterShare;
