import tw, { css } from 'twin.macro';
import { SerializedStyles } from '@emotion/react';
import { animate } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

export type imgSizeType = 'sm' | 'base' | 'lg';
export type textSizeType = 'sm' | 'base' | 'lg';

export interface dataProps {
    title: string;
    figures: number | string;
    startFigures?: number;
    suffix: string;
}

export interface imgProps {
    imgStyle?: React.CSSProperties;
    imgSrc: string;
    imgAlt?: string;
}

export interface StatCardProps {
    mode: 'mobile' | 'desktop';
    isStatic?: boolean;
    inView?: boolean;
    data: dataProps;
    img: imgProps;
    imgSize: imgSizeType;
    textSize: textSizeType;
    cardStyle?: SerializedStyles;
}

const imgSizeMap = {
    sm: {
        mobile: '20px',
        desktop: '32px',
    },
    base: {
        mobile: '24px',
        desktop: '36px',
    },
    lg: {
        mobile: '32px',
        desktop: '44px',
    },
};

const textSizeMap = {
    sm: {
        figures: tw`text-lg md:text-2xl`,
        title: tw`text-xs md:text-lg`,
    },
    base: {
        figures: tw`text-2xl md:text-5xl`,
        title: tw`text-sm md:text-2xl`,
    },
    lg: {
        figures: tw`text-2xl md:text-6xl`,
        title: tw`text-base md:text-4xl`,
    },
};

const StatCard: React.FC<StatCardProps> = ({
    isStatic = false,
    inView,
    data: { figures, startFigures = 1000, title, suffix },
    img: { imgSrc, imgAlt, imgStyle },
    mode,
    cardStyle,
    imgSize,
    textSize,
}) => {
    return (
        <div
            css={[
                mode === 'desktop'
                    ? css`
                          max-width: 326px;
                      `
                    : css`
                          break-inside: avoid;
                          height: 119px;
                      `,
                css`
                    background-color: #f2f2f2;
                `,
                tw`flex flex-col rounded-2xl font-bold items-start justify-between px-4 py-2 sm:(px-5 py-3) md:(px-9 py-5 h-full items-stretch)`,
                cardStyle,
            ]}
        >
            <img
                style={
                    imgStyle
                        ? imgStyle
                        : mode === 'desktop'
                        ? { width: `${imgSizeMap[imgSize].desktop}` }
                        : { width: `${imgSizeMap[imgSize].mobile}` }
                }
                src={imgSrc}
                alt={imgAlt}
            />
            {!isStatic ? (
                <h1 css={textSizeMap[textSize].figures}>
                    {!!inView && <Counter from={startFigures} to={Number(figures)} />}
                    {suffix}
                </h1>
            ) : (
                <h1 css={textSizeMap[textSize].figures}>
                    {figures}
                    {suffix}
                </h1>
            )}
            <h1
                css={[
                    css`
                        color: #999999;
                    `,
                    textSizeMap[textSize].title,
                ]}
            >
                {title}
            </h1>
        </div>
    );
};

export default StatCard;

export const Counter: React.FC<{ from: number; to: number }> = ({ from, to }) => {
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const controls = animate(from, to, {
            duration: 1,
            onUpdate(value) {
                if (value && ref.current) {
                    ref.current.textContent = value.toFixed();
                }
            },
        });
        return () => controls.stop();
    }, [from, to]);

    return <span ref={ref} />;
};
