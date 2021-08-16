export const argstype = {
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
            options: ['white', 'black'],
        },
    },
};
