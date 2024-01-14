import MainSection from './MainSection';

export default {
    title: 'Example/MainSection',
    component: MainSection,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

export const Primary = {
    args: {
        primary: true,
        label: 'MainSection',
    },
};

export const Secondary = {
    args: {
        label: 'MainSection',
    },
};

export const Large = {
    args: {
        size: 'large',
        label: 'MainSection',
    },
};

export const Small = {
    args: {
        size: 'small',
        label: 'MainSection',
    },
};
