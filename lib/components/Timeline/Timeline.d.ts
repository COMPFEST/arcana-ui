import React from 'react';
import { SerializedStyles } from '@emotion/react';
export interface TimelineProps {
    title: string;
    subtitle: string;
    items: Array<{
        id: string;
        title: string;
        date: string | Array<string>;
        startAt: Date;
        endAt: Date;
    }>;
    gradient: SerializedStyles;
    ringColor: string;
}
export interface ItemProps {
    title: string;
    date: string | Array<string>;
    line: boolean;
    started: boolean;
    upcoming: boolean;
    gradient: SerializedStyles;
    ringColor: string;
}
declare const Timeline: React.FC<TimelineProps>;
export default Timeline;
//# sourceMappingURL=Timeline.d.ts.map