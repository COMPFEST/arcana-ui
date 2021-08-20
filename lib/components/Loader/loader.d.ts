import React from 'react';
export declare type LoaderType = 'spinner';
export declare type LoaderSpeed = 'slow' | 'medium' | 'fast';
export declare type LoaderColor = 'blue' | 'light-blue' | 'black' | 'white';
export interface BaseLoaderProps {
    className?: string;
    type?: LoaderType;
    visible?: boolean;
    height?: string;
    width?: string;
    speed?: LoaderSpeed;
    color?: LoaderColor;
    parentBackground?: string;
    timeout?: number;
}
declare const Loader: React.FC<BaseLoaderProps>;
export default Loader;
//# sourceMappingURL=loader.d.ts.map