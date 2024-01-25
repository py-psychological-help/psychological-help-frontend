import React from 'react';
import cls from './AccountChatPage.module.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import Chats from '../../components/Chats/Chats';

const AccountChatPage = ({ onSelect }) => (
	<div className={cls.body}>
		<Sidebar />
		<Chats onSelect={onSelect} />
	</div>
);

export default AccountChatPage;
