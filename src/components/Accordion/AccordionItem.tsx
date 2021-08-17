import React, { ReactNode } from 'react';
import tw, { css } from 'twin.macro';
import { Disclosure } from '@headlessui/react';
import { AnimatePresence, motion } from 'framer-motion';

export interface AccordionItemProps {
    idx: number;
    title: string;
    content: string;
    iconName: string;
    iconMargin: string;
    textColor: string;
    bgInit: string;
    bgOpen: string;
}

const AccordionItem: React.FC<AccordionItemProps> = (props) => {
    const { idx, title, content, iconName, iconMargin, textColor, bgInit, bgOpen } = props;
    return (
        <Disclosure>
            {({ open }) => (
                <motion.div
                    animate={{ backgroundColor: open ? `${bgOpen}` : `${bgInit}` }}
                    css={[
                        tw`flex flex-col px-4 text-xs md:(px-0 text-base)`,
                        css`
                            color: ${textColor};
                        `,
                    ]}
                >
                    <div
                        css={[
                            css`
                                --tw-divide-y-reverse: 0;
                                border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
                                border-bottom-width: calc(1px * var(--tw-divide-y-reverse));
                            `,
                            idx == 0 && tw`border-t-0`,
                        ]}
                    ></div>
                    <Disclosure.Button>
                        <motion.div
                            tw="flex justify-between items-center text-left font-bold pt-4 pb-0 px-2 md:(pt-8 pb-4 px-10)"
                            animate={{ marginBottom: open ? 0 : '1rem' }}
                            transition={{ duration: 0.35 }}
                        >
                            {title}
                            <div
                                css={css`
                                    margin-left: ${iconMargin};
                                `}
                            >
                                <motion.div tw="w-6 h-6" animate={{ rotate: open ? 180 : 0 }}>
                                    <img src={`/${iconName}`} alt="collapse" />
                                </motion.div>
                            </div>
                        </motion.div>
                    </Disclosure.Button>

                    <AnimatePresence initial={false}>
                        {open && (
                            <motion.div
                                initial="collapsed"
                                animate="open"
                                exit="collapsed"
                                variants={{
                                    open: { opacity: 1, height: 'auto' },
                                    collapsed: { opacity: 0, height: 0 },
                                }}
                                transition={{ duration: 0.2 }}
                            >
                                <Disclosure.Panel static>
                                    <div tw="px-2 pt-2 pb-4 md:(px-10 pt-0 pb-8)">{content}</div>
                                </Disclosure.Panel>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            )}
        </Disclosure>
    );
};

export default AccordionItem;
