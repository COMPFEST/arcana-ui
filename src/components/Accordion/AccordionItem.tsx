import React from 'react';
import tw, { css } from 'twin.macro';
import { Disclosure } from '@headlessui/react';
// import ArrowDown from "../../stories/assets/arrow-down.svg";
import { AnimatePresence, motion } from 'framer-motion';

export interface AccordionItemProps {
    idx: number;
    title: string;
    content: React.ReactNode;
    imgName: string;
}

const AccordionItem: React.FC<AccordionItemProps> = (props) => {
    const { idx, title, content, imgName } = props;
    return (
        <Disclosure>
            {({ open }) => (
                <motion.div
                    animate={{ backgroundColor: open ? '#F0F7FE' : '#FFF' }}
                    tw="flex flex-col md:(px-4 text-xs)"
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
                            tw="flex justify-between items-center text-left font-bold pt-8 pb-4 md:(pt-4 pb-0 px-10) px-2"
                            animate={{ marginBottom: open ? 0 : '1rem' }}
                            transition={{ duration: 0.35 }}
                        >
                            {title}
                            <motion.div tw="md:(ml-4)" animate={{ rotate: open ? 180 : 0 }}>
                                <img src={`/${imgName}`} alt="collapse" />
                            </motion.div>
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
                                    <div tw="mb-8 pr-6 md:(mb-4 px-10) px-2">{content}</div>
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
