import React, { ElementType, MouseEventHandler, ReactNode } from 'react';
export declare type ButtonTheme = 'default' | 'primary' | 'secondary' | 'tertiary';
export declare type ComponentSize = 'base' | 'full' | 'half';
export declare type IconAlignment = 'left' | 'right';
interface BaseButtonProps {
    buttonTheme?: ButtonTheme;
    icon?: ElementType;
    iconAlignment?: IconAlignment;
    size?: ComponentSize;
    className?: string;
    children?: ReactNode;
    disabled?: boolean;
    shadow?: boolean;
    loading?: boolean;
    mt?: boolean;
    ml?: boolean;
}
declare type HTMLButtonProps = {
    onClick?: MouseEventHandler<any>;
    type?: 'button' | 'submit' | 'reset';
} & BaseButtonProps;
declare type HTMLAnchorProps = {
    href?: string;
    rel: string;
    target: string;
} & BaseButtonProps;
/**
 * Support for React Router
 */
declare type CustomNodeProps = {
    to?: string;
} & BaseButtonProps;
export declare type ButtonProps = HTMLButtonProps & HTMLAnchorProps & CustomNodeProps;
declare const _default: React.ForwardRefExoticComponent<{
    onClick?: React.MouseEventHandler<any> | undefined;
    type?: "button" | "submit" | "reset" | undefined;
} & BaseButtonProps & {
    href?: string | undefined;
    rel: string;
    target: string;
} & {
    to?: string | undefined;
} & React.RefAttributes<unknown>>;
export default _default;
//# sourceMappingURL=button.d.ts.map