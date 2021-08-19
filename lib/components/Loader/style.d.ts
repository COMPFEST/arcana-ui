/// <reference types="react" />
import { LoaderColor, LoaderSpeed } from './loader';
interface StyledSpinnerProps {
    color: LoaderColor;
    width: string;
    height: string;
    parentBackground: string;
    speed: LoaderSpeed;
}
export declare const SpeedMap: {
    slow: string;
    medium: string;
    fast: string;
};
export declare const BackgroundMap: {
    blue: string;
    'light-blue': string;
    black: string;
    white: string;
};
export declare const OutlineMap: {
    blue: string;
    'light-blue': string;
    black: string;
    white: string;
};
declare const _default: {
    StyledSpinner: import("@emotion/styled").StyledComponent<{
        theme?: import("@emotion/react").Theme | undefined;
        as?: import("react").ElementType<any> | undefined;
    } & StyledSpinnerProps, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
};
export default _default;
//# sourceMappingURL=style.d.ts.map