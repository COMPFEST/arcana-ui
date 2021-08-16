import React, { useState, useEffect, ReactNode } from 'react';
import { RundownContainer, RundownThemeMap, StyledRundown, StyledTime } from './style';

export type RundownColor = 'default' | 'blue' | 'red' | 'dark-red' | 'black';
export type TimeColor = 'black' | 'white';

interface dataRundownProps {
    event: string;
    time: string;
}

export interface RundownProps {
    classname?: string;
    backgroundColor?: RundownColor;
    textColor?: string;
    children?: ReactNode;
    borderColor: string;
    borderWidth: string;
    timeBgColor?: string;
    timeColor: TimeColor;
    dataRundown: Array<dataRundownProps>;
    timeFormat: string;
}

const Rundown: React.FC<RundownProps> = (props) => {
    const {
        classname,
        backgroundColor = 'default',
        textColor = 'black',
        borderColor,
        borderWidth,
        timeBgColor = '#7033f3',
        timeColor,
        dataRundown,
        timeFormat = 'WIB',
    } = props;

    const styledRundownProps = {
        classname,
        backgroundColor,
        textColor,
        borderColor,
        borderWidth,
    };
    const styledTimeProps = {
        timeBgColor,
        timeColor,
    };

    // Add rundown data first before rendering
    return dataRundown.map((e) => {
        return (
            <RundownContainer key={e}>
                <StyledRundown {...styledRundownProps}>
                    <StyledTime {...styledTimeProps}>{`${e.time} ${timeFormat}`}</StyledTime>
                    {e.event}
                </StyledRundown>
            </RundownContainer>
        );
    });
};

export default Rundown;
