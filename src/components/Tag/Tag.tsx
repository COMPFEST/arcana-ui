import React from 'react';
import { SerializedStyles } from '@emotion/react';
import tw, { css, styled } from 'twin.macro';
import { AssetType, Icon } from './asset';
import button from '../Button/button';
export type iconSizeType = 'sm' | 'base' | 'lg' | 'xl';
export type textSizeType = 'xs' | 'sm' | 'base';
export type buttonType = 'primary' | 'secondary' | 'warning' | 'neutral';

const iconSizeMap = {
    sm: tw`w-3 h-3`,
    base: tw`w-4 h-5`,
    lg: tw`w-6 h-6`,
    xl: tw`w-8 h-8`,
};

const textSizeMap = {
    xs: tw`text-xs`,
    sm: tw`text-sm`,
    base: tw`text-base`,
};

export const ButtonThemeMap = {
    primary: tw`bg-blue hover:bg-blue-lighter`,
    secondary: tw`bg-lightBlue hover:bg-lightBlue-lighter`,
    warning: css`
        background-color: rgba(254, 244, 244, 1);
        &:hover {
            background-color: rgba(254, 244, 244, 0.5);
        }
    `,
    neutral: css`
        background-color: rgba(218, 218, 218, 0.22);
        &:hover {
            background-color: rgba(218, 218, 218, 0.5);
        }
    `,
};

export const TextColorMap = {
    neutral: tw`text-black-100 font-bold`,
    warning: tw`text-error font-bold`,
    primary: tw`text-white font-bold`,
    secondary: tw`text-blue font-bold`,
};

export interface TagButtonProps {
    icon: AssetType;
    text: string;
    iconSize: iconSizeType;
    textSize: textSizeType;
    buttonMode: buttonType;
}

const TagButton: React.FC<TagButtonProps> = ({ buttonMode, icon, iconSize, text, textSize }) => {
    return (
        <button
            tw="py-2 px-3 rounded-2xl flex items-center cursor-default"
            css={[
                ButtonThemeMap[buttonMode],
                TextColorMap[buttonMode],
                css`
                    transition: background-color 0.5s ease;
                    &:hover {
                        transition: background-color 0.5s ease;
                    }
                `,
            ]}
        >
            <Icon buttonMode={buttonMode} iconSize={iconSize} asset={icon} />
            <h6 css={[textSizeMap[textSize]]}>{text}</h6>
        </button>
    );
};
export default TagButton;
