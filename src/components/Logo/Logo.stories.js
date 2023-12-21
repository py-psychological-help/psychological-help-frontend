import Logo from './Logo';

export default {
    title: 'Example/Logo',
    component: Logo,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

export const Primary = {
    args: {
        primary: true,
        label: 'Logo',
    },
};

export const Secondary = {
    args: {
        label: 'Logo',
    },
};

export const Large = {
    args: {
        size: 'large',
        label: 'Logo',
    },
};

export const Small = {
    args: {
        size: 'small',
        label: 'Logo',
    },
};
