import tw, { styled, css } from 'twin.macro';
import { TipsType } from './tips';

interface StyledTipsProps {
    type: TipsType;
    width: string;
    height: string;
    parentBackground: string;
}

export const ColorsMap = {
    positive: {
        color: '#008800',
        bg: '#F2F9F2',
    },
    warning: {
        color: '#E68C00',
        bg: '#FFFAE6',
    },
    neutral: {
        color: '#333333',
        bg: '#F3F3F3',
    },
    danger: {
        color: '#E9202A',
        bg: '#FEF4F4',
    },
};

const StyledTips = styled.div<StyledTipsProps>`
    &.inactive {
        display: none;
    }

    font-size: 12px;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border-radius: 12px;
    background: ${(props) => ColorsMap[props.type].bg};
    position: relative;
`;

export default StyledTips;
