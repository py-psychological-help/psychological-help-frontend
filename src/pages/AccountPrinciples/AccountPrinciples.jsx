import React from 'react';
import cls from './AccountPrinciples.module.scss'
import Sidebar from "../../components/Sidebar/Sidebar";
import Principles from "../../components/Principles/Principles";


const AccountPrinciples = () => (
    <div className={cls.body}>
        <Sidebar/>
        <Principles/>
    </div>
);

export default AccountPrinciples;
