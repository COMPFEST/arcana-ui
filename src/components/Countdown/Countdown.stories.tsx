import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Countdown, { CountdownProps } from './Countdown';

export default {
    title: 'Components/Countdown',
    component: Countdown,
} as Meta;

const CountdownComponent: Story<CountdownProps> = (args) => <Countdown {...args} />;
export const Default = CountdownComponent.bind({});
Default.args = {
    endDate: new Date(Date.now() + 86400000),
    initDuration: 1,
    animated: true,
    title: 'Waktu Tersisa',
};
