import React from 'react';
import { NavLink } from 'react-router-dom';
import cls from './Chat.module.scss';

// eslint-disable-next-line react/prop-types
function Chat({ name }) {
	return (
		<div className={cls.chat}>
			<h2 className={cls.chatMessage}>{name}</h2>
			<NavLink to="/messages" className={cls.chatButton}>
				Подключиться
			</NavLink>
		</div>
	);
}

export default Chat;
