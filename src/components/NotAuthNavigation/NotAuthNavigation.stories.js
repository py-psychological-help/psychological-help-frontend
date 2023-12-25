import NotAuthNavigation from './NotAuthNavigation';

export default {
    title: 'Example/NotAuthNavigation',
    component: NotAuthNavigation,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

export const Primary = {
    args: {
        primary: true,
        label: 'NotAuthNavigation',
    },
};

export const Secondary = {
    args: {
        label: 'NotAuthNavigation',
    },
};

export const Large = {
    args: {
        size: 'large',
        label: 'NotAuthNavigation',
    },
};

export const Small = {
    args: {
        size: 'small',
        label: 'NotAuthNavigation',
    },
};
