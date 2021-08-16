import React, { useState, useEffect, ReactNode } from 'react';
import { RundownContainer, RundownThemeMap, StyledRundown, StyledTime } from './style';

export type RundownColor = 'default' | 'blue' | 'red' | 'dark-red' | 'black';
export type TimeColor = 'black' | 'white';

export interface RundownProps {
    classname?: string;
    backgroundColor?: RundownColor;
    textColor?: string;
    children?: ReactNode;
    imageSource?: ReactNode;
    borderColor: string;
    borderWidth: string;
    timeBgColor?: string;
    timeColor: TimeColor;
}

const Rundown: React.FC<RundownProps> = (props) => {
    const {
        classname,
        backgroundColor = 'default',
        textColor = 'black',
        children,
        borderColor,
        borderWidth,
        timeBgColor = '#7033f3',
        timeColor,
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

    return (
        <RundownContainer>
            <StyledRundown {...styledRundownProps}>
                <StyledTime {...styledTimeProps}>19.00-20.00</StyledTime>
                {children}
            </StyledRundown>
        </RundownContainer>
    );
};

export default Rundown;
