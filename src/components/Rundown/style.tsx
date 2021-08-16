import tw, { styled, css } from 'twin.macro';
import { RundownColor, RundownProps } from './rundown';

interface StyledRundownProps {
    backgroundColor: RundownColor;
}

export const RundownThemeMap = {
    default: '#F5F5F5',
    blue: '#0266D3',
};

export const BorderWidthMap = {
    none: '0px',
    sm: '2px',
    md: '4px',
    lg: '8px',
};

export const RundownContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1124px;
    @media (min-width: 768px) {
        justify-content: start;
        align-items: flex-start;
    }
`;

export const StyledRundown = styled.div<StyledRundownProps>`
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    border-radius: 0.5rem;
    padding: 0.5rem;
    background-color: ${(props) => RundownThemeMap[props.backgroundColor]};
    min-height: 6rem;
    width: 100%;
    font-weight: 700;
    font-size: 1.125rem;
    border: ${(props) => BorderWidthMap[props.borderWidth]} solid ${(props) => props.borderColor};
    @media (max-width: 768px) {
        justify-content: center;
        padding: 1rem;
    }
`;

export const StyledTime = styled.div`
    width: auto;
    margin-right: 1rem;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    font-weight: 600;
    margin-left: 0;
    background-color: ${(props) => props.timeBgColor};
    color: ${(props) => props.timeColor};
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    @media (max-width: 768px) {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-right: 0;
        margin-bottom: 0.5rem;
    }
`;
