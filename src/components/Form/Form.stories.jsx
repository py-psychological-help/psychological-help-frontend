import Form from './Form';

export default {
    title: 'Example/Form',
    component: Form,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

export const Primary = {
    args: {
        primary: true,
        label: 'Form',
    },
};
