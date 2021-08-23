import { SerializedStyles } from '@emotion/react';
import React, { useState } from 'react';
import { onSelected } from './Style';
import TestimonyController, { imgBorderType, imgContainerType, TestimonyControllerProps } from './TestimonyController';
import TestimonyView, {
    containerMarginType,
    containerSpaceType,
    imgSizeType,
    messageModeType,
    TestimonyViewProps,
} from './TestimonyView';

export interface Testimony {
    nama: string;
    namaPanggilan: string;
    position: string;
    src: string;
    message: React.ReactNode;
}
export type mode = 'default';
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
export interface TestimonyLayoutProps extends TestimonyProps, TestimonyStoriesProps {}
const TestimonyLayout: React.FC<TestimonyLayoutProps> = ({
    controllerImgBorder,
    viewContainerSpace,
    controllerImgContainer,
    controllerImgHeight,
    controllerImgWidth,
    viewContainerMargin,
    viewImgSize,
    viewMessageMode,
    testiList,
}) => {
    const [selected, setSelected] = useState<number>(0);

    const view: TestimonyViewProps = {
        testiList: testiList,
        selected: selected,
        containerSpace: viewContainerSpace,
        containerMargin: viewContainerMargin,
        imgSize: viewImgSize,
        messageMode: viewMessageMode,
    };

    const controller: TestimonyControllerProps = {
        testiList: testiList,
        selected: selected,
        selector: setSelected,
        onSelected: onSelected,
        imgBorder: controllerImgBorder,
        imgContainer: controllerImgContainer,
        imgHeight: controllerImgHeight,
        imgWidth: controllerImgWidth,
    };

    return (
        <div tw="overflow-x-hidden">
            <TestimonyView {...view} />
            <TestimonyController {...controller} />
        </div>
    );
};
export default TestimonyLayout;
