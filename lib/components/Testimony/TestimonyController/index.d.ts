import React from 'react';
import { SerializedStyles } from '@emotion/react';
import { TestimonyProps } from '../Testimony';
export declare type imgBorderType = 'full' | 'none' | 'xl';
export declare type imgContainerType = 'sm' | 'base' | 'lg';
export interface TestimonyControllerProps extends TestimonyProps {
    selector?: React.Dispatch<number>;
    selected?: number;
    imgContainer?: imgContainerType;
    imgBorder: imgBorderType;
    onSelected?: SerializedStyles;
    imgHeight?: string;
    imgWidth?: string;
}
declare const TestimonyController: React.FC<TestimonyControllerProps>;
export default TestimonyController;
//# sourceMappingURL=index.d.ts.map