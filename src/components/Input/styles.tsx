import { styled } from 'twin.macro';

interface StyledTextProps {
    width: string;
    height: string;
    parentBackground: string;
    bg: string;
    borderColor: string;
    borderRadius: string;
    fontSize: string;
    fontWeight: string | number;
    border: string;
}

const StyledText = styled.input<StyledTextProps>`
    position: relative;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border-radius: ${(props) => props.borderRadius};
    border-color: ${(props) => props.borderColor};
    border: ${(props) => props.border};
    background: ${(props) => props.bg};
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) => props.fontWeight};
    padding: 12px 16px;

    &:focus {
        outline: none;
    }
`;

export default StyledText;
