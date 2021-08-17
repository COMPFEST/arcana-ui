import React from 'react';
import { css } from 'twin.macro';
import AccordionItem from './AccordionItem';
import { AnimateSharedLayout } from 'framer-motion';

export interface AccordionProps {
    items: Array<{
        title: string;
        content: string;
    }>;
    imgName?: string;
}

const Accordion: React.FC<AccordionProps> = (props) => {
    const { items, imgName = 'arrow-down.svg' } = props;
    return (
        <AnimateSharedLayout type="crossfade">
            <div
                tw="flex flex-col justify-center items-center container mx-auto px-16 w-screen md:(px-0 w-auto)"
                css={css`
                    @media (min-width: 1536px) {
                        max-width: 1536px !important;
                    }
                `}
                id="faq"
            >
                <div tw="w-full">
                    {items.map((item, key) => (
                        <AccordionItem
                            key={key}
                            idx={key}
                            title={item.title}
                            content={item.content}
                            imgName={imgName}
                        />
                    ))}
                </div>
            </div>
        </AnimateSharedLayout>
    );
};

export default Accordion;
