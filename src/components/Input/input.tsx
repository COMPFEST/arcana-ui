import React from 'react';
import StyledText from './styles';

type Input = 'text' | 'date';

export interface BaseTextProps {
    className?: string;
    type: Input;

    // Size of the component, in string
    // e.g. "80px", "100%", etc
    height?: string;
    width?: string;

    // background color
    bg?: string;

    borderColor?: string;
    border?: string;
    borderRadius: string;

    fontSize?: string;
    fontWeight?: string | number;

    placeholder?: string;

    // Scuffed fix to the parent background, has to be specified!
    parentBackground?: string;
}

const Text: React.FC<BaseTextProps> = (props) => {
    const {
        parentBackground = 'white',
        height = '48px',
        width = '364px',
        border = '1px solid #999999',
        borderColor = '#999999',
        borderRadius = '8px',
        bg = '#FFFFFF',
        className,
        fontWeight = 400,
        fontSize = '16px',
        placeholder,
        type = 'text',
    } = props;

    const styledTextProps = {
        className,
        width,
        height,
        parentBackground,
        bg,
        border,
        borderColor,
        borderRadius,
        fontWeight,
        fontSize,
    };
    return <StyledText type={type} placeholder={placeholder} {...styledTextProps} />;
};

export default Text;
