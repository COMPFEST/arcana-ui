import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Modal, { ModalProps } from './Modal';
import LoginModal from './Examples/LoginModal';

export default {
    title: 'Components/Modal',
    component: Modal,
} as Meta;

const ModalComponent: Story<ModalProps> = (args) => (
    <Modal {...args}>
        <p>Test Hello Hello</p>
    </Modal>
);
export const Default = ModalComponent.bind({});
Default.args = {
    isOpen: true,
    setIsOpen: () => undefined,
};

const ExampleComponent1: Story<ModalProps> = (args) => <LoginModal {...args} />;
export const Login = ExampleComponent1.bind({});
Login.args = {
    size: 'sm',
};
