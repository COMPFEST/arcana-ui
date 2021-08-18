import React, { ReactNode } from 'react';
import tw, { css } from 'twin.macro';
import AccordionItem from './AccordionItem';
import { AnimateSharedLayout } from 'framer-motion';

export interface AccordionProps {
    // Array of content items
    items: Array<{
        title: string;
        content: string;
    }>;

    // Collapse icon
    iconName?: ReactNode;

    // Icon left spacing to title, e.g. '20px'
    iconMargin?: string;

    // e.g. '#F0F7FE'
    textColor?: string;
    bgInit?: string;
    bgOpen?: string;

    // e.g. 180
    rotateDeg?: number;
}

const Accordion: React.FC<AccordionProps> = (props) => {
    const {
        items,
        iconName = 'arrow-down.svg',
        iconMargin = '32px',
        textColor = '#000',
        bgInit = '#FFF',
        bgOpen = '#F0F7FE',
        rotateDeg = 180,
    } = props;
    return (
        <AnimateSharedLayout type="crossfade">
            <div
                tw="flex flex-col justify-center items-center container mx-auto px-0 w-full"
                css={css`
                    @media (min-width: 1536px) {
                        max-width: 1536px !important;
                    }
                `}
                id="faq"
            >
                <div tw="w-full">
                    {items.map((item, idx) => (
                        <AccordionItem
                            key={idx}
                            idx={idx}
                            title={item.title}
                            content={item.content}
                            iconName={iconName}
                            iconMargin={iconMargin}
                            textColor={textColor}
                            bgInit={bgInit}
                            bgOpen={bgOpen}
                            rotateDeg={rotateDeg}
                        />
                    ))}
                </div>
            </div>
        </AnimateSharedLayout>
    );
};

export default Accordion;
