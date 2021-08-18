import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Radio from './radio';

export default {
    title: 'Components/Radio',
    component: Radio,
} as Meta;

const DefaultRadioTemplate: Story = (args) => <Radio {...args} />;
export const Default = DefaultRadioTemplate.bind({});
Default.args = {
    options: ['Laki-laki', 'Perempuan', 'Other'],
};
