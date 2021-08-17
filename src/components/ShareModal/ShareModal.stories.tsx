import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import ShareModal, { ShareModalProps } from './ShareModal';

export default {
    title: 'Components/ShareModal',
    component: ShareModal,
} as Meta;

const DefaultShareModalTemplate: Story<ShareModalProps> = (args) => <ShareModal {...args} />;
export const Default = DefaultShareModalTemplate.bind({});
Default.args = {
    url: 'compfest.id/share',
    isOpen: true,
};
