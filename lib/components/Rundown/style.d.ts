/// <reference types="react" />
import { RundownColor } from './rundown';
interface StyledRundownProps {
    backgroundColor: RundownColor;
}
export declare const RundownThemeMap: {
    default: string;
    blue: string;
};
export declare const BorderWidthMap: {
    none: string;
    sm: string;
    md: string;
    lg: string;
};
export declare const RundownContainer: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const StyledRundown: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & StyledRundownProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const StyledTime: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const StyledTimeIcon: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
}, import("react").DetailedHTMLProps<import("react").ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, {}>;
export {};
//# sourceMappingURL=style.d.ts.map