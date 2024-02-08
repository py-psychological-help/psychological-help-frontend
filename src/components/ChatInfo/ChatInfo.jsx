import React from 'react';
import cls from './Chatinfo.module.scss';

function ChatInfo({ selectedChat }) {
	return (
		<div className={cls.info}>
			<h2 className={cls.title}>{`Заявка №${selectedChat.id}`}</h2>
			<h2 className={cls.subtitle}>Имя</h2>
			<p className={cls.text}>{selectedChat.client.first_name}</p>
			<h2 className={cls.subtitle}>Проблема</h2>
			<p className={cls.text}>{selectedChat.client.complaint}</p>
		</div>
	);
}

export default ChatInfo;
