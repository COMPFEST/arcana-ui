import React from 'react';
import toast, { Toaster as MyToaster } from 'react-hot-toast';

export const errorToast = (message: string) => {
    toast.error(message);
};

export const successToast = (message: string) => {
    toast.success(message);
};

export const Toaster = <MyToaster position="top-center" reverseOrder={false} />;
