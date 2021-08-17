import React from 'react';
import LineShare from './LineShare';
import TwitterShare from './TwitterShare';
import WhatsAppShare from './WhatsAppShare';

export interface IconShareProps {
    url: Location | string;
}

const IconShare: React.FC<IconShareProps> = ({ url }) => {
    return (
        <>
            <LineShare url={url} />
            <TwitterShare url={url} />
            <WhatsAppShare url={url} />
        </>
    );
};

export default IconShare;
