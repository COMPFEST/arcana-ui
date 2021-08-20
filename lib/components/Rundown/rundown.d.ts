import React, { ReactNode } from 'react';
export declare type RundownColor = 'default' | 'blue' | 'red' | 'dark-red' | 'black';
export declare type TimeColor = 'black' | 'white';
interface dataRundownProps {
    event: string;
    timeStart: string | number;
    timeEnd: string | number;
}
export interface RundownProps {
    classname?: string;
    backgroundColor?: RundownColor;
    textColor?: string;
    children?: ReactNode;
    timeBgColor?: string;
    timeColor: TimeColor;
    dataRundown: Array<dataRundownProps>;
    timeFormat: string;
    imgName: string;
}
declare const Rundown: React.FC<RundownProps>;
export default Rundown;
//# sourceMappingURL=rundown.d.ts.map