import React from 'react';
import tw from 'twin.macro';

interface CFCloseButtonProps {
    onClose: () => void;
}

export const CFCloseButton: React.FC<CFCloseButtonProps> = ({ onClose }) => {
    const closeButtonStyle = tw`p-2 cursor-pointer rounded-full bg-gray-200 hover:bg-gray-300 absolute flex justify-center items-center`;
    return (
        <div onClick={onClose} tw="flex" css={closeButtonStyle}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M13.725 4.28253C13.5849 4.14209 13.3947 4.06316 13.1963 4.06316C12.9979 4.06316 12.8077 4.14209 12.6675 4.28253L9.00004 7.94253L5.33254 4.27503C5.19242 4.13459 5.00218 4.05566 4.80379 4.05566C4.6054 4.05566 4.41516 4.13459 4.27504 4.27503C3.98254 4.56753 3.98254 5.04003 4.27504 5.33253L7.94254 9.00003L4.27504 12.6675C3.98254 12.96 3.98254 13.4325 4.27504 13.725C4.56754 14.0175 5.04004 14.0175 5.33254 13.725L9.00004 10.0575L12.6675 13.725C12.96 14.0175 13.4325 14.0175 13.725 13.725C14.0175 13.4325 14.0175 12.96 13.725 12.6675L10.0575 9.00003L13.725 5.33253C14.01 5.04753 14.01 4.56753 13.725 4.28253Z"
                    fill="black"
                />
            </svg>
        </div>
    );
};
