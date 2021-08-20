import React from 'react';
import { TestimonyProps } from '../Testimony';
export interface TestimonyViewProps extends TestimonyProps {
    selected?: number;
    containerMargin?: containerMarginType;
    containerSpace: containerSpaceType;
    imgSize?: imgSizeType;
    messageMode?: messageModeType;
}
export declare type containerMarginType = 'sm' | 'base' | 'lg';
export declare type containerSpaceType = 'tight' | 'base' | 'sparse';
export declare type imgSizeType = 'xs' | 'sm' | 'base' | 'lg';
export declare type messageModeType = 'sm' | 'base' | 'lg';
declare const TestimonyView: React.FC<TestimonyViewProps>;
export default TestimonyView;
//# sourceMappingURL=index.d.ts.map