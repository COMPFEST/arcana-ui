import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Tips, { BaseTipsProps } from './tips';

export default {
    title: 'Components/Tips',
    component: Tips,
    argTypes: {
        type: {
            control: {
                type: 'radio',
                options: ['positive', 'neutral', 'warning', 'danger'],
            },
        },
    },
} as Meta;

const DefaultLoaderTemplate: Story<BaseTipsProps> = (args) => <Tips {...args} />;
export const Default = DefaultLoaderTemplate.bind({});

Default.args = {
    type: 'positive',
    height: '60px',
    width: '364px',
    parentBackground: '#FFFFFF',
};
