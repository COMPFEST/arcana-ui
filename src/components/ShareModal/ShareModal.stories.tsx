import React from 'react';
import ShareModal, { ShareModalProps } from './ShareModal';
import { Story, Meta } from '@storybook/react/types-6-0';
import { argTypes } from './argTypes';

export default {
    title: 'Components/ShareModal',
    component: ShareModal,
    argTypes: argTypes,
} as Meta;

// const [isOpen, setIsOpen] = useState<boolean>(true);

const DefaultShareModalTemplate: Story<ShareModalProps> = (args) => <ShareModal {...args} />;
export const Default = DefaultShareModalTemplate.bind({});
Default.args = {
    size: 'md',
    target: 'compfest.id',
    isOpen: true,
};
