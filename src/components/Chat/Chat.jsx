import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import cls from './Chat.module.scss';

function Chat({ id, firstName, complaint, onSelect }) {
	return (
		<div className={cls.chat}>
			<div className={cls.chatInfo}>
				<h2 className={cls.number}>{`Заявка №${id}`}</h2>
				<p className={cls.name}>
					{firstName.length > 0 ? `Имя: ${firstName}` : ''}
				</p>
				<p className={cls.problem}>{`Проблема: ${complaint}`}</p>
			</div>
			<Link to="/psy-side" className={cls.chatButton} onClick={onSelect}>
				Подключиться
			</Link>
		</div>
	);
}

Chat.propTypes = {
	id: PropTypes.number.isRequired,
	firstName: PropTypes.string.isRequired,
	complaint: PropTypes.string.isRequired,
};

export default Chat;
