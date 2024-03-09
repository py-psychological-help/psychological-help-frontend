import React, { memo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import clsx from 'clsx';
import cls from './Chat.module.scss';

const Chat = memo(({ chat, onSelect, onDisable, className }) => {
	const navigate = useNavigate();
	const { key: chatSecretKey } = useParams();
	const handleClick = () => {
		onSelect(chat);
		navigate(`/psy-side/${chat.chat_secret_key}/`);
	};

	const getFirstFiveWords = (text) => {
		return text.split(' ').slice(0, 5).join(' ');
	};

	return (
		<div className={cls.chat}>
			<div className={cls.chatInfo}>
				<div className={cls.row}>
					<h2 className={cls.number}>{`Заявка №${chat.id}`}</h2>
					<span
						className={clsx(cls.divider, className, {
							[cls.invisible]: !chat.client.first_name,
						})}
					>
						&#183;
					</span>
					<p className={cls.name}>
						{chat.client.first_name.length > 0
							? `${chat.client.first_name}`
							: ''}
					</p>
				</div>
				<p className={cls.problem}>{`Проблема: ${getFirstFiveWords(
					chat.client.complaint
				)}`}</p>
			</div>
			<button
				className={clsx(cls.chatButton, className, {
					[cls.disabled]: !chat.active,
				})}
				onClick={handleClick}
				disabled={!chat.active}
			>
				Подключиться
			</button>
		</div>
	);
});

export default Chat;
