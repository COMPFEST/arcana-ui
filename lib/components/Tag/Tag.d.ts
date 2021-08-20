import React from 'react';
export declare type iconSizeType = 'sm' | 'base' | 'lg' | 'xl';
export declare type textSizeType = 'xs' | 'sm' | 'base';
export declare type buttonType = 'primary' | 'secondary' | 'warning' | 'neutral';
export declare const ButtonThemeMap: {
    primary: import("twin.macro").TwStyle;
    secondary: import("twin.macro").TwStyle;
    warning: import("@emotion/utils").SerializedStyles;
    neutral: import("@emotion/utils").SerializedStyles;
};
export declare const TextColorMap: {
    neutral: import("twin.macro").TwStyle;
    warning: import("twin.macro").TwStyle;
    primary: import("twin.macro").TwStyle;
    secondary: import("twin.macro").TwStyle;
};
export interface TagButtonProps {
    icon: any;
    text: string;
    iconSize: iconSizeType;
    textSize: textSizeType;
    buttonMode: buttonType;
}
declare const TagButton: React.FC<TagButtonProps>;
export default TagButton;
//# sourceMappingURL=Tag.d.ts.map