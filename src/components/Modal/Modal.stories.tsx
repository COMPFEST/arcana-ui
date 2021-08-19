import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Modal, { ModalProps } from './Modal';
import LoginModal from './Examples/LoginModal';

export default {
    title: 'Components/Modal',
    component: Modal,
} as Meta;

const ModalComponent: Story<ModalProps> = (args) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <Modal {...args} isOpen={isOpen} setIsOpen={setIsOpen}>
            <p>Test Hello Hello</p>
        </Modal>
    );
};
export const Default = ModalComponent.bind({});
Default.args = {};

const ExampleComponent1: Story<ModalProps> = (args) => {
    const [isOpen, setIsOpen] = useState(true);
    return <LoginModal {...args} isOpen={isOpen} setIsOpen={setIsOpen} />;
};
export const Login = ExampleComponent1.bind({});
Login.args = {
    size: 'sm',
};
