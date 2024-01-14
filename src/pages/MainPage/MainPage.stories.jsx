import MainPage from './MainPage';

export default {
    title: 'Example/MainPage',
    component: MainPage,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

export const Primary = {
    args: {
        primary: true,
        label: 'MainPage',
    },
};
