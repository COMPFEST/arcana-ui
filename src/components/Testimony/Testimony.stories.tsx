import React from 'react';
import TestimonyLayout, { Testimony } from './Testimony';
import { dataTesti, GradientText } from './util';

export default {
    title: 'Components/Testimony',
    component: TestimonyLayout,
};

export const defaultTestimony = () => <TestimonyLayout testiList={dataTesti} />;
