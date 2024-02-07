import React from 'react';
import { useNavigate } from 'react-router-dom';
import cls from './PsychologistSide.module.scss';
import ChatInfo from '../ChatInfo/ChatInfo';
import Messages from '../Messages/Messages';

function PsychologistSide({ selectedChat, onSelect }) {
	const navigate = useNavigate();
	const handleCloseButtonClick = () => {
		navigate('/account-chat');
	};

	return (
		<>
			<div className={cls.row}>
				<h1 className={cls.title}>Чат с пользователем </h1>
				<button
					className={cls.close}
					type="button"
					onClick={handleCloseButtonClick}
				>
					Завершить чат
				</button>
			</div>
			<div className={cls.messagesContainer}>
				<ChatInfo selectedChat={selectedChat} />
				<Messages selectedChat={selectedChat} onSelect={onSelect} />
			</div>
		</>
	);
}

export default PsychologistSide;
