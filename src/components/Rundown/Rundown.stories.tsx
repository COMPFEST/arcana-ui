import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Rundown, { RundownProps } from './rundown';
import { argstype } from './argtypes';

export default {
    title: 'Components/Rundown',
    component: Rundown,
    argTypes: argstype,
} as Meta;

const DefaultRundownTemplate: Story<RundownProps> = (args) => <Rundown {...args} />;
export const Default = DefaultRundownTemplate.bind({});
Default.args = {
    dataRundown: [{}],
    backgroundColor: 'default',
    children: 'Rundown Acara 1',
    borderColor: '#F5F5F5',
    borderWidth: '0px',
    timeBgColor: '#7033f3',
    timeColor: 'black',
};
