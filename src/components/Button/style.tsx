import React, { ReactNode, ElementType } from "react";
import tw, { styled } from "twin.macro";
import { ButtonTheme, ComponentSize, IconAlignment } from ".";

export const ButtonThemeMap = {
    default: tw`text-white bg-blue hover:bg-blue-lighter`,
    primary: tw`text-white bg-blue hover:bg-blue-lighter`,
    secondary: tw`text-blue bg-blue-50 rounded-lg`,
    tertiary: tw`text-blue rounded-lg hover:bg-blue-50`,
}

export const TextColorMap = {
    blue: tw``,
    black: tw`text-gray-900 hover:bg-gray-100`,
    red: tw`text-red-500 hover:bg-red-100`,
    white: tw`text-white-700 `
}

export const ComponentSizeMap = {
    base: tw``,
    full: tw`w-full text-center justify-center`,
    half: tw`w-1/2 text-center justify-center`,
}

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

const StyledIconCSS = styled.div``

const StyledButton = styled.button<StyledButtonProps>`
    &:focus {
    outline: none;
  }
  &:hover {
    background-position: 100% 50%;
    box-shadow: ${props =>
      props.shadow ? "0 8px 8px 0 rgba(0, 0, 0, 0.2)" : "0"};
  }
  &:active {
    transition: all ease 0.1s;
    transform: scale(0.9, 0.9);
    box-shadow: ${props =>
      props.shadow ? "0px 4px 4px 0px rgba(0, 0, 0, 0.2)" : "0"};
  }
  &:disabled {
    cursor: not-allowed;
  }
  transition: all ease 0.3s;
`
export const StyledIcon: React.FC<StyledIconProps> = (props) => {
  const {
    alignment,
    children,
    icon,
  } = props
  return (
    <StyledIconCSS tw="flex justify-start items-center">
    {icon && alignment === 'left' && 
      <div className="icon-placeholder">
        {icon}
      </div>}
    {children}
    {icon && alignment === 'right' && 
      <div className="icon-placeholder">
        {icon}
      </div>}
    </StyledIconCSS>
  )
}

export default StyledButton;
