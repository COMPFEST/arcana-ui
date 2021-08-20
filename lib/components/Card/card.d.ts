import React from 'react';
export declare type CardSize = 'default' | 'full';
interface BaseCardProps {
    title?: string;
    size?: CardSize;
    isMobile?: boolean;
    className?: string;
    children?: React.ReactNode;
}
export declare type CardProps = BaseCardProps;
declare const Card: React.FC<CardProps>;
export default Card;
//# sourceMappingURL=card.d.ts.map