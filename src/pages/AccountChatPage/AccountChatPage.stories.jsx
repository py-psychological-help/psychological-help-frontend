import AccountChatPage from "./AccountChatPage";

export default {
    title: 'Example/AccountChatPage',
    component: AccountChatPage,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: {control: 'color'},
    },
};

export const Primary = {
    args: {
        primary: true,
        label: 'AccountChatPage',
    },
};
