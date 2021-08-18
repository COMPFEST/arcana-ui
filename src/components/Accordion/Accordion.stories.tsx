import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Accordion, { AccordionProps } from './Accordion';

export default {
    title: 'Components/Accordion',
    component: Accordion,
} as Meta;

const DefaultAccordionTemplate: Story<AccordionProps> = (args) => <Accordion {...args} />;
export const Default = DefaultAccordionTemplate.bind({});
Default.args = {
    items: [
        { title: 'Default title', content: 'Default accordion content' },
        {
            title:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus delectus suscipit, recusandae dolor perspiciatis quis debitis deleniti ex commodi repudiandae, sint molestiae quo fuga illum fugit aut. Fugit, maxime repellat?',
            content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus delectus suscipit, recusandae dolor perspiciatis quis debitis deleniti ex commodi repudiandae, sint molestiae quo fuga illum fugit aut. Fugit, maxime repellat?',
        },
    ],
    iconName: 'arrow-down.svg',
    iconMargin: '32px',
    color: '#000',
    bgInit: '#FFF',
    bgOpen: '#F0F7FE',
    rotateDeg: 180,
};
