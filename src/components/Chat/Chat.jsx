import React from 'react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import cls from './Chat.module.scss';

function Chat({ chat, onSelect, onDisable, className }) {
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
						{chat.client.first_name.length > 0
							? `${chat.client.first_name}`
							: ''}
					</p>
				</div>
				<p
					className={cls.problem}
				>{`Проблема: ${chat.client.complaint}`}</p>
			</div>
			<button
				className={clsx(cls.chatButton, className, {
					[cls.disabled]: chat.new && onDisable,
				})}
				onClick={handleClick}
				disabled={chat.new && onDisable}
			>
				Подключиться
			</button>
		</div>
	);
}

export default Chat;
