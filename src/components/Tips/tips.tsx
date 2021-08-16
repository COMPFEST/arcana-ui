import React, { useState, useEffect } from 'react';
import StyledTips from './styles';

export type TipsColor = 'light-green' | 'gray' | 'light-yellow' | 'light-red';
export type TipsType = 'positive' | 'neutral' | 'warning' | 'danger';

export interface BaseTipsProps {
    className?: string;

    // Boolean conditionals
    visible?: boolean;

    // Size of the component, in string
    // e.g. "80px", "100%", etc
    height?: string;
    width?: string;

    type: TipsType;

    // Scuffed fix to the parent background, has to be specified!
    parentBackground?: string;
}

const Loader: React.FC<BaseTipsProps> = (props) => {
    const { parentBackground = 'white', height = '80px', width = '80px', className, type } = props;

    const styledLoaderProps = {
        className: `${className ?? ''}`,
        width,
        height,
        parentBackground,
        type,
    };
    return <StyledTips {...styledLoaderProps}></StyledTips>;
};

export default Loader;
