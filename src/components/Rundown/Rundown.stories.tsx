import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Rundown, { RundownProps } from './rundown';

export default {
    title: 'Components/Rundown',
    component: Rundown,
    argTypes: {
        backgroundColor: {
            control: {
                type: 'radio',
                options: ['default', 'blue', 'red', 'dark-red', 'black'],
            },
        },
        borderColor: {
            control: 'color',
        },
        borderWidth: {
            control: {
                type: 'inline-radio',
                options: ['none', 'sm', 'md', 'lg'],
            },
        },
        timeBgColor: {
            control: 'color',
        },
        timeColor: {
            control: {
                type: 'inline-radio',
                options: ['black', 'white'],
            },
        },
    },
} as Meta;

const DefaultRundownTemplate: Story<RundownProps> = (args) => <Rundown {...args} />;
export const Default = DefaultRundownTemplate.bind({});
Default.args = {
    backgroundColor: 'default',
    children: 'Rundown Acara 1',
    borderColor: '#F5F5F5',
    borderWidth: '0px',
    timeBgColor: '#7033f3',
    timeColor: 'black',
};
