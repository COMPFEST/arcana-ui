import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { UploadFile, UploadFileProps } from './upload';

export default {
    title: 'Components/UploadFile',
    component: UploadFile,
} as Meta;

const hapusFile = () => {
    console.log('Called hapus!');
};

const onDrop = async (acceptedFiles, rejectedFiles) => {
    if (acceptedFiles.length === 1) {
        console.log(acceptedFiles[0], 'sukses');
    } else if (rejectedFiles[0].errors[0].code === 'file-too-large') {
        console.log('file terlalu besar');
    } else {
        console.log(rejectedFiles, 'file tidak sesuai');
    }
};

const DefaultUploadTemplate: Story<UploadFileProps> = (args) => <UploadFile {...args} />;
export const Default = DefaultUploadTemplate.bind({});
Default.args = {
    uploaded: false,
    onDrop: onDrop,
    hapusFile: hapusFile,
    allowedExtensions: ['.zip', '.png', '.jpg'],
};
