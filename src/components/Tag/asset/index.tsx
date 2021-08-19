import React from 'react';
import tw, { css } from 'twin.macro';
import { buttonType, iconSizeType } from '../Tag';

const iconSizeMap = {
    sm: tw`w-3 h-3`,
    base: tw`w-4 h-5`,
    lg: tw`w-6 h-6`,
    xl: tw`w-8 h-8`,
};
export const TextColorMap = {
    neutral: tw`text-black-100 font-bold`,
    warning: tw`text-error font-bold`,
    primary: tw`text-white font-bold`,
    secondary: tw`text-blue font-bold`,
};

export type AssetType = 'Docs' | 'Rupiah' | 'Browser';

export const Icon: React.FC<{ asset: AssetType; buttonMode: buttonType; iconSize: iconSizeType }> = ({
    buttonMode,
    iconSize,
    asset,
}) => {
    switch (asset) {
        case 'Docs':
            return (
                <svg
                    css={[tw`mr-2 fill-current`, TextColorMap[buttonMode], iconSizeMap[iconSize]]}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.99992 1.33337C4.31992 1.33337 1.33325 4.32004 1.33325 8.00004C1.33325 11.68 4.31992 14.6667 7.99992 14.6667C11.6799 14.6667 14.6666 11.68 14.6666 8.00004C14.6666 4.32004 11.6799 1.33337 7.99992 1.33337ZM7.33325 13.2867C4.69992 12.96 2.66659 10.72 2.66659 8.00004C2.66659 7.58671 2.71992 7.19337 2.80659 6.80671L5.99992 10V10.6667C5.99992 11.4 6.59992 12 7.33325 12V13.2867ZM10.6666 10.6667C11.2666 10.6667 11.7599 11.0534 11.9333 11.5934C12.7999 10.6467 13.3333 9.38671 13.3333 8.00004C13.3333 5.76671 11.9533 3.85337 9.99992 3.06004V3.33337C9.99992 4.06671 9.39992 4.66671 8.66658 4.66671H7.33325V6.00004C7.33325 6.36671 7.03325 6.66671 6.66658 6.66671H5.33325V8.00004H9.33325C9.69992 8.00004 9.99992 8.30004 9.99992 8.66671V10.6667H10.6666Z"
                    />
                </svg>
            );
        case 'Rupiah':
            return (
                <svg
                    css={[tw`mr-2 fill-current`, TextColorMap[buttonMode], iconSizeMap[iconSize]]}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M5.31988 5.79657V7.41538H6.0282C6.62576 7.41538 6.9173 7.14907 6.9173 6.61907C6.9173 6.08645 6.62576 5.79657 6.0234 5.79657H5.31988Z" />
                    <path d="M10.4929 7.04202C9.99406 7.04202 9.71458 7.49894 9.71458 8.21431C9.71458 8.92969 9.99893 9.39969 10.4929 9.39969C10.9964 9.39969 11.2711 8.91405 11.2711 8.21431C11.2711 7.51981 11.0012 7.04202 10.4929 7.04202Z" />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8 15C11.866 15 15 11.866 15 8C15 4.13399 11.866 1 8 1C4.13399 1 1 4.13399 1 8C1 11.866 4.13399 15 8 15ZM5.31988 10.2195H4.2766V4.87234H6.22338C7.34375 4.87234 7.99186 5.55637 7.99186 6.61907C7.99186 7.35008 7.68104 7.88015 7.11969 8.14123L8.16777 10.2195H7.01606L6.08121 8.32398H5.31988V10.2195ZM9.73626 11.7234H8.70985V6.20913H9.72186V6.88276H9.7676C9.90497 6.55638 10.2013 6.15691 10.8205 6.15691C11.6325 6.15691 12.3191 6.84094 12.3191 8.21955C12.3191 9.56157 11.6614 10.2848 10.8181 10.2848C10.2206 10.2848 9.90977 9.91144 9.7676 9.57721H9.73626V11.7234Z"
                    />
                </svg>
            );
        case 'Browser':
            return (
                <svg
                    css={[tw`mr-2 fill-current`, TextColorMap[buttonMode], iconSizeMap[iconSize]]}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.67341 2.66671C2.67341 1.93337 3.26675 1.33337 4.00008 1.33337H8.78008C9.13341 1.33337 9.47341 1.47337 9.72008 1.72671L12.9401 4.94671C13.1934 5.19337 13.3334 5.53337 13.3334 5.88671V13.3334C13.3334 14.0667 12.7334 14.6667 12.0001 14.6667H3.99341C3.26008 14.6667 2.66675 14.0667 2.66675 13.3334L2.67341 2.66671ZM8.66675 2.33337V5.33337C8.66675 5.70004 8.96675 6.00004 9.33341 6.00004H12.3334L8.66675 2.33337Z"
                    />
                </svg>
            );
    }
};
