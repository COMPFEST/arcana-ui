import React from 'react';
import { IconShareProps } from './index';

const LineShare: React.FC<IconShareProps> = ({ url }) => (
    <a href={`https://social-plugins.line.me/lineit/share?url=${url}`} target="_blank" rel="noreferrer">
        <div className="share-button">
            <img src="/line.svg" alt="line" />
        </div>
    </a>
);

export default LineShare;
