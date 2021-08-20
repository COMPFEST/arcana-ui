import React, { ReactNode, ElementType } from 'react';
import { ButtonTheme, ComponentSize, IconAlignment } from './button';
export declare const ButtonThemeMap: {
    default: import("twin.macro").TwStyle;
    primary: import("twin.macro").TwStyle;
    secondary: import("twin.macro").TwStyle;
    tertiary: import("twin.macro").TwStyle;
};
export declare const TextColorMap: {
    default: import("twin.macro").TwStyle;
    primary: import("twin.macro").TwStyle;
    secondary: import("twin.macro").TwStyle;
    tertiary: import("twin.macro").TwStyle;
};
export declare const ComponentSizeMap: {
    base: import("twin.macro").TwStyle;
    full: import("twin.macro").TwStyle;
    half: import("twin.macro").TwStyle;
};
interface StyledIconProps {
    icon?: ElementType;
    children: ReactNode;
    alignment: IconAlignment;
}
interface StyledButtonProps {
    innerType: ButtonTheme;
    size: ComponentSize;
    disabled: boolean;
    withText: ReactNode;
    shadow: boolean;
}
declare const StyledButton: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: React.ElementType<any> | undefined;
} & StyledButtonProps, React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {}>;
export declare const StyledIcon: React.FC<StyledIconProps>;
export default StyledButton;
//# sourceMappingURL=style.d.ts.map