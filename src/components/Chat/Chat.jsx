import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import cls from './Chat.module.scss';

function Chat({ chat, onSelect }) {
	const handleClick = () => {
		onSelect(chat);
	};
	return (
		<div className={cls.chat}>
			<div className={cls.chatInfo}>
				<h2 className={cls.number}>{`Заявка №${chat.id}`}</h2>
				<p className={cls.name}>
					{chat.psychologist.first_name.length > 0
						? `Имя: ${chat.psychologist.first_name}`
						: ''}
				</p>
				<p
					className={cls.problem}
				>{`Проблема: ${chat.psychologist.complaint}`}</p>
			</div>
			<Link
				to="/psy-side"
				className={cls.chatButton}
				onClick={handleClick}
			>
				Подключиться
			</Link>
		</div>
	);
}

// Chat.propTypes = {
// 	id: PropTypes.number.isRequired,
// 	firstName: PropTypes.string.isRequired,
// 	complaint: PropTypes.string.isRequired,
// };

export default Chat;
