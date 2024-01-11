import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import cls from './Chat.module.scss';

// eslint-disable-next-line react/prop-types
function Chat({ id, firstName, complaint }) {
	return (
		<div className={cls.chat}>
			<div className={cls.chatInfo}>
				<h2 className={cls.number}>{`Заявка №${id}`}</h2>
				<p className={cls.name}>{`Имя: ${firstName}`}</p>
				<p className={cls.problem}>{`Проблема: ${complaint}`}</p>
			</div>
			<NavLink to="/messages" className={cls.chatButton}>
				Подключиться
			</NavLink>
		</div>
	);
}

Chat.propTypes = {
	id: PropTypes.number.isRequired,
	firstName: PropTypes.string.isRequired,
	complaint: PropTypes.string.isRequired,
	// client: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Chat;
