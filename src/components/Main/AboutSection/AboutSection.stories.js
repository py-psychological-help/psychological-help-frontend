import AboutSection from './AboutSection';

export default {
    title: 'Example/AboutSection',
    component: AboutSection,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

export const Primary = {
    args: {
        primary: true,
        label: 'AboutSection',
    },
};

export const Secondary = {
    args: {
        label: 'AboutSection',
    },
};

export const Large = {
    args: {
        size: 'large',
        label: 'AboutSection',
    },
};

export const Small = {
    args: {
        size: 'small',
        label: 'AboutSection',
    },
};
