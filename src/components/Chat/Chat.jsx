import React from 'react';
import { useNavigate } from 'react-router-dom';
import cls from './Chat.module.scss';

function Chat({ chat, onSelect, onDisable }) {
	const navigate = useNavigate();
	const handleClick = () => {
		onSelect(chat);
		navigate('/psy-side');
	};

	return (
		<div className={cls.chat}>
			<div className={cls.chatInfo}>
				<div className={cls.row}>
					<h2 className={cls.number}>{`Заявка №${chat.id}`}</h2>
					<span className={cls.divider}>&#183;</span>
					<p className={cls.name}>
						{chat.psychologist.first_name.length > 0
							? `${chat.psychologist.first_name}`
							: ''}
					</p>
				</div>
				<p
					className={cls.problem}
				>{`Проблема: ${chat.psychologist.complaint}`}</p>
			</div>
			<button
				className={cls.chatButton}
				onClick={handleClick}
				disabled={chat.new && onDisable}
			>
				Подключиться
			</button>
		</div>
	);
}

export default Chat;
