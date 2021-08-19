import React from 'react';
export declare type TimeLeft = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};
export interface CountdownProps {
    endDate: Date;
    initDuration?: number;
    animated?: boolean;
    title: string;
    digits: {
        seconds: boolean;
        minutes: boolean;
        hours: boolean;
        days: boolean;
    };
}
declare const Countdown: React.FC<CountdownProps>;
export default Countdown;
//# sourceMappingURL=Countdown.d.ts.map