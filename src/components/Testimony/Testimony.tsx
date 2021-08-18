import React, { useState } from 'react';
import { onSelected } from './Style';
import TestimonyController, { TestimonyControllerProps } from './TestimonyController';
import TestimonyView, { TestimonyViewProps } from './TestimonyView';

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

const TestimonyLayout: React.FC<TestimonyProps> = (props) => {
    const { testiList } = props;
    const [selected, setSelected] = useState<number>(0);

    const viewDefault: TestimonyViewProps = {
        testiList: testiList,
        selected: selected,
        containerSpace: 'base',
        containerMargin: 'base',
        imgSize: 'base',
    };

    const controllerDefault: TestimonyControllerProps = {
        testiList: testiList,
        selected: selected,
        selector: setSelected,
        onSelected: onSelected,
        imgBorder: 'full',
        imgContainer: 'base',
        imgHeight: '100%',
        imgWidth: '100%',
    };

    return (
        <div tw="overflow-x-hidden">
            <TestimonyView {...viewDefault} />
            <TestimonyController {...controllerDefault} />
        </div>
    );
};
export default TestimonyLayout;
