import { SerializedStyles } from '@emotion/react';
import React from 'react';
export declare type imgSizeType = 'sm' | 'base' | 'lg';
export declare type textSizeType = 'sm' | 'base' | 'lg';
export interface dataProps {
    title: string;
    figures: number | string;
    startFigures?: number;
    suffix: string;
}
export interface imgProps {
    imgStyle?: React.CSSProperties;
    imgSrc: string;
    imgAlt?: string;
}
export interface StatCardProps {
    mode: 'mobile' | 'desktop';
    isStatic?: boolean;
    inView?: boolean;
    data: dataProps;
    img: imgProps;
    imgSize: imgSizeType;
    textSize: textSizeType;
    cardStyle?: SerializedStyles;
}
declare const StatCard: React.FC<StatCardProps>;
export default StatCard;
export declare const Counter: React.FC<{
    from: number;
    to: number;
}>;
//# sourceMappingURL=StatCard.d.ts.map