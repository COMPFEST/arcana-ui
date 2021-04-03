import React, { ElementType, MouseEventHandler, MutableRefObject, ReactNode } from "react";
import { Link } from "react-router-dom";

import tw from 'twin.macro'

import StyledButton, { StyledIcon, ButtonThemeMap, TextColorMap, ComponentSizeMap } from "./style"

export type ButtonTheme = 'default' | 'primary' | 'secondary' | 'tertiary';

export type ComponentSize = 'base' | 'full' | 'half';

export type IconAlignment = 'left' | 'right';

export type TextColor = 'blue' | 'white' | 'black' | 'red'; 

interface BaseButtonProps {
    // Button type for later colors
    buttonTheme?: ButtonTheme;

    // Icons for Button
    icon?: ElementType;
    iconAlignment?: IconAlignment;

    // Size based on ComponentSize
    size?: ComponentSize;

    // ReactDOM/CSS based attributes
    className?:string;
    children?: ReactNode;
    disabled?: boolean;
    shadow?: boolean;
    color?: TextColor;

    // States
    loading?: boolean;

    // Boolean conditionals exceptions(Joni, refactorable)
    mt?: boolean;
    ml?: boolean;
}

type HTMLButtonProps = {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    type?: 'button' | 'submit' | 'reset';
} & BaseButtonProps;

type HTMLAnchorProps = {
    href?: string;
} & BaseButtonProps;

/**
 * Support for React Router
 */
type CustomNodeProps = {
    to?: string;
} & BaseButtonProps;

export type ButtonProps = HTMLButtonProps & HTMLAnchorProps & CustomNodeProps;

const Button:React.ForwardRefRenderFunction<unknown, ButtonProps> = (props, ref) => {
    const {
        buttonTheme = 'default',

        icon,
        iconAlignment = 'left',

        size = 'base',

        className = '',
        children,
        disabled = false,
        shadow = false,
        color = 'white',

        loading = false,
        
        mt = false,
        ml = false,
        
        onClick,
        type,
        href,
        to
    } = props;

    const styles = {
        innerType: buttonTheme,
        size,
        disabled,
        shadow,
        withText: children !== null,
    }

    const iconOptions = {
        icon,
        alignment:iconAlignment
    }

    if(to && !disabled){
        return (
            <StyledButton
                className={className}
                {...styles}
            >
                <Link to={to} ref={ref as MutableRefObject<HTMLAnchorElement>}>
                    <StyledIcon 
                        {...iconOptions}
                    >
                        {children}
                    </StyledIcon>
                </Link>   
            </StyledButton>
        )
    }

    if(href && !disabled){
        return (
            <StyledButton
                className={className}
                {...styles}
            >
                <a href={href} ref={ref as MutableRefObject<HTMLAnchorElement>}>
                    <StyledIcon {...iconOptions}>
                        {children}
                    </StyledIcon>
                </a>
            </StyledButton>
        )
    }

    return (
        <StyledButton
            type={type}
            // TODO: how to do hard typing here, gimana si anjinkk
            onClick={onClick as any}
            ref={ref as MutableRefObject<HTMLButtonElement>}
            className={className}
            css={[
                ButtonThemeMap[buttonTheme],
                TextColorMap[color],
                ml && tw`ml-5`,
                mt && tw`mt-5`,
                ComponentSizeMap[size],
                tw`py-3 px-6 font-bold rounded-lg`,
                disabled && tw`bg-gray-200 text-gray-400 hover:bg-gray-200`,
            ]}
            {...styles}
        >
            <StyledIcon {...iconOptions}>
                <div css={[
                    tw`text-sm lg:text-base flex items-center`,
                    ComponentSizeMap['full']
                ]}>
                    {children}
                </div>
            </StyledIcon>
        </StyledButton>
    )
}

export default React.forwardRef<unknown, ButtonProps>(Button);