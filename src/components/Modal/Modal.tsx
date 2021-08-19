import React, { useState, useRef } from 'react';
import { Dialog } from '@headlessui/react';
import tw from 'twin.macro';
import { CFCloseButton } from './CloseButton';

export interface ModalProps {
    size?: string;
}

const Modal: React.FC<ModalProps> = ({ size, children }) => {
    const [isOpen, setIsOpen] = useState(true);
    const focusRef = useRef(null);

    return (
        <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            tw="fixed z-10 inset-0 overflow-y-auto"
            initialFocus={focusRef}
        >
            <div tw="flex items-center justify-center min-h-screen">
                <Dialog.Overlay tw="fixed inset-0 bg-black-40 opacity-80" />
                <div ref={focusRef} tw="relative rounded w-full mx-auto border border-black-40 z-10 bg-white">
                    <div tw="absolute right-8 -top-10">
                        <CFCloseButton onClose={() => setIsOpen(false)} />
                    </div>

                    <p>Test Hello Hello</p>
                </div>
            </div>
        </Dialog>
    );
};

export default Modal;
