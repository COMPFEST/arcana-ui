import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import TestimonyView, { TestimonyViewProps } from './index';
import { Testimony } from '../Testimony';
import { dataTesti, GradientText } from '../util';

const DefaultHeader: React.ReactNode = (
    <div tw="flex">
        <h3>Yang Mereka Katakan Tentang</h3>
        <img tw="h-4 md:h-6 ml-3" src="/images/Testimony/cf-logo.svg" />
    </div>
);

const DefaultTemplate: Story<TestimonyViewProps> = (args) => (
    <TestimonyView testiList={dataTesti} testimonyHeader={DefaultHeader} {...args} />
);

export default {
    title: 'Components/Testimony/View',
    component: TestimonyView,
    argTypes: {
        containerMargin: {
            control: {
                type: 'inline-radio',
                options: ['sm', 'base', 'lg'],
            },
        },
        messageMode: {
            control: {
                type: 'inline-radio',
                options: ['sm', 'base', 'lg'],
            },
        },
        containerSpace: {
            control: {
                type: 'inline-radio',
                options: ['tight', 'base', 'sparse'],
            },
        },
        imgSize: {
            control: {
                type: 'inline-radio',
                options: ['sm', 'base', 'lg'],
            },
        },
    },
} as Meta;

export const Default = DefaultTemplate.bind({});
Default.args = {
    selected: 0,
    containerMargin: 'base',
    containerSpace: 'base',
    imgSize: 'base',
    messageMode: 'base',
};
