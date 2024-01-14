import WarningSection from './WarningSection';

export default {
    title: 'Example/WarningSection',
    component: WarningSection,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

export const Primary = {
    args: {
        primary: true,
        label: 'WarningSection',
    },
};

export const Secondary = {
    args: {
        label: 'WarningSection',
    },
};

export const Large = {
    args: {
        size: 'large',
        label: 'WarningSection',
    },
};

export const Small = {
    args: {
        size: 'small',
        label: 'WarningSection',
    },
};
