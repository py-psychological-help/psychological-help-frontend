import AccountPage from './AccountPage';

export default {
    title: 'Example/AccountPage',
    component: AccountPage,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

export const Primary = {
    args: {
        primary: true,
        label: 'AccountPage',
    },
};
