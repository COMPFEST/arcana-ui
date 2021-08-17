import React from 'react';
import { IconShareProps } from './index';

const WhatsAppShare: React.FC<IconShareProps> = ({ url }) => (
    <a href={`https://wa.me/?text=${url}`} data-action="share/whatsapp/share" target="_blank" rel="noreferrer">
        <div className="share-button">
            <img src="/whatsApp.svg" alt="whatsapp" />
        </div>
    </a>
);

export default WhatsAppShare;
