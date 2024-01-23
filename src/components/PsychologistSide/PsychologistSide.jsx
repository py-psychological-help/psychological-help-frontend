import React from 'react';
import { useNavigate } from 'react-router-dom';
import cls from './PsychologistSide.module.scss';
import ChatNumber from '../ChatNumber/ChatNumber';
import Messages from '../Messages/Messages';

function PsychologistSide({ selectedChat, onSelect }) {
	const navigate = useNavigate();
	const handleCloseButtonClick = () => {
		navigate('/account-chat');
	};

	return (
		<div className={cls.container}>
			<ChatNumber />
			<Messages selectedChat={selectedChat} onSelect={onSelect} />
			<button
				className={cls.close}
				type="button"
				onClick={handleCloseButtonClick}
			>
				Завершить чат
			</button>
		</div>
	);
}

export default PsychologistSide;
