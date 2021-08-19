import React from 'react';
import Tag, { TagButtonProps } from '.';
import { Story, Meta } from '@storybook/react/types-6-0';
export default {
    title: 'Components/Tag',
    component: Tag,
    argTypes: {
        iconSize: {
            control: {
                type: 'inline-radio',
                options: ['sm', 'base', 'lg', 'xl'],
            },
        },
        textSize: {
            control: {
                type: 'inline-radio',
                options: ['xs', 'sm', 'base'],
            },
        },
        buttonMode: {
            control: {
                type: 'inline-radio',
                options: ['warning', 'neutral', 'primary', 'secondary'],
            },
        },
        icon: {
            control: {
                type: 'inline-radio',
                options: ['Docs', 'Rupiah', 'Browser'],
            },
        },
    },
} as Meta;

const Template: Story<TagButtonProps> = (args) => <Tag {...args} />;
export const Default = Template.bind({});

Default.args = {
    icon: 'Docs',
    text: 'Sertifikat untuk Peserta',
    iconSize: 'base',
    textSize: 'xs',
    buttonMode: 'neutral',
};
