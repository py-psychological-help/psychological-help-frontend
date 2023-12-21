import React from 'react';
import cls from './AccountPage.module.scss';
import Sidebar from "../../components/Sidebar/Sidebar";
import AccountInfo from "../../components/AccountInfo/AccountInfo";

const AccountPage = () => (
    <div className={cls.body}>
        <Sidebar/>
        <AccountInfo/>
    </div>
);

export default AccountPage;
