import React, { useState } from 'react';
import tw from 'twin.macro';
import Modal, { ModalProps } from '../Modal';

const LoginModal: React.FC<ModalProps> = ({ size }) => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <Modal size={size} isOpen={isOpen} setIsOpen={setIsOpen}>
            <div tw="w-full flex flex-col justify-center items-center py-8 px-12">
                <img tw="mb-4" src="/img/login.png"></img>
                <div tw="flex flex-col w-full space-y-1 mb-3">
                    <label tw="uppercase text-xs">Email</label>
                    <input
                        placeholder="Masukkan email kamu"
                        type="text"
                        tw="border border-gray-400 focus:outline-none py-2 px-2 rounded-lg"
                    />
                </div>
                <div tw="flex flex-col w-full space-y-1 mb-3">
                    <label tw="uppercase text-xs">Password</label>
                    <input
                        placeholder="Masukkan password kamu"
                        type="password"
                        tw="border border-gray-400 focus:outline-none py-2 px-2 rounded-lg"
                    />
                </div>
            </div>
        </Modal>
    );
};

export default LoginModal;
