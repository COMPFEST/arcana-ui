import React from 'react';
import { imgBorderType, imgContainerType } from './TestimonyController';
import { containerMarginType, containerSpaceType, imgSizeType, messageModeType } from './TestimonyView';
export interface Testimony {
    nama: string;
    namaPanggilan: string;
    position: string;
    src: string;
    message: React.ReactNode;
}
export declare type mode = 'default';
export interface TestimonyProps {
    testiList: Testimony[];
}
export interface TestimonyStoriesProps {
    viewContainerMargin?: containerMarginType;
    viewContainerSpace: containerSpaceType;
    viewImgSize?: imgSizeType;
    viewMessageMode?: messageModeType;
    controllerImgContainer?: imgContainerType;
    controllerImgBorder: imgBorderType;
    controllerImgHeight?: string;
    controllerImgWidth?: string;
}
export interface TestimonyLayoutProps extends TestimonyProps, TestimonyStoriesProps {
}
declare const TestimonyLayout: React.FC<TestimonyLayoutProps>;
export default TestimonyLayout;
//# sourceMappingURL=Testimony.d.ts.map