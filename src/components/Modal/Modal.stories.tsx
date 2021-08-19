import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Modal, { ModalProps } from './Modal';

export default {
    title: 'Components/Modal',
    component: Modal,
} as Meta;

const ModalComponent: Story<ModalProps> = (args) => <Modal {...args}></Modal>;
export const Default = ModalComponent.bind({});
Default.args = {};
