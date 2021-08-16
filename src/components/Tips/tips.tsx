import React from 'react';
import { StyledIconInfo } from './styles';
import StyledTips from './styles';

export type TipsColor = 'light-green' | 'gray' | 'light-yellow' | 'light-red';
export type TipsType = 'positive' | 'neutral' | 'warning' | 'danger';
export type IconSize = 'sm' | 'md' | 'lg' | 'xl';

export interface BaseTipsProps {
    className?: string;

    // Boolean conditionals
    visible?: boolean;

    // Size of the component, in string
    // e.g. "80px", "100%", etc
    height?: string;
    width?: string;

    iconSize?: IconSize;
    noBg?: boolean;

    type: TipsType;
    fontSize?: string;

    // Scuffed fix to the parent background, has to be specified!
    parentBackground?: string;
}

const Tips: React.FC<BaseTipsProps> = (props) => {
    const {
        parentBackground = 'white',
        height = '60px',
        width = '364px',
        iconSize = 'md',
        fontSize = '12px',
        className,
        type,
        children,
        noBg = false,
    } = props;

    const styledTipsProps = {
        className: ` ${noBg ? 'noBg' : ''} ${className ?? ''}`,
        width,
        height,
        parentBackground,
        type,
        fontSize,
        noBg,
    };
    return (
        <StyledTips {...styledTipsProps}>
            <StyledIconInfo src={`/bx-info-circle-${type}.svg`} iconSize={iconSize} />
            <div>{children}</div>
        </StyledTips>
    );
};

export default Tips;
