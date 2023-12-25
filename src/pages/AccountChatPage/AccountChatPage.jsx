import React from 'react';
import cls from './AccountChatPage.module.scss';
import Sidebar from "../../components/Sidebar/Sidebar";
import Chats from "../../components/Chats/Chats";


const AccountChatPage = () => (
    <div className={cls.body}>
        <Sidebar/>
        <Chats/>

    </div>
);

export default AccountChatPage;
