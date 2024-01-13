import React from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import cls from './Chat.module.scss';

function Chat({name}) {
	return (
		<div className={cls.chat}>
			<h2 className={cls.chatMessage}>{name}</h2>
			<NavLink to="/messages" className={cls.chatButton}>
				Подключиться
			</NavLink>
		</div>
	);
}

Chat.propTypes = {
	name: PropTypes.string.isRequired,
};

export default Chat;
