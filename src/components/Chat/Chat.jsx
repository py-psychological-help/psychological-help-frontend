import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import cls from './Chat.module.scss';

function Chat({ id, firstName, complaint }) {
	return (
		<div className={cls.chat}>
			<div className={cls.chatInfo}>
				<h2 className={cls.number}>{`Заявка №${id}`}</h2>
				<p className={cls.name}>
					{firstName.length > 0 ? `Имя: ${firstName}` : ''}
				</p>
				<p className={cls.problem}>{`Проблема: ${complaint}`}</p>
			</div>
			<NavLink to="/psy-side" className={cls.chatButton}>
				Подключиться
			</NavLink>
		</div>
	);
}

Chat.propTypes = {
	id: PropTypes.number.isRequired,
	firstName: PropTypes.string.isRequired,
	complaint: PropTypes.string.isRequired,
};

export default Chat;
