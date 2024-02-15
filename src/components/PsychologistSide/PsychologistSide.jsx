import React, { useRef } from 'react';
import cls from './PsychologistSide.module.scss';
import ChatInfo from '../ChatInfo/ChatInfo';
import Messages from '../Messages/Messages';

function PsychologistSide({ selectedChat, onSelect }) {
	const archiveButtonRef = useRef(null);

	return (
		<>
			<div className={cls.row}>
				<h1 className={cls.title}>Чат с пользователем </h1>
				<button
					ref={archiveButtonRef}
					className={cls.close}
					type="button"
				>
					Завершить чат
				</button>
			</div>
			<div className={cls.messagesContainer}>
				<ChatInfo selectedChat={selectedChat} />
				<Messages
					selectedChat={selectedChat}
					onSelect={onSelect}
					archiveButtonRef={archiveButtonRef}
				/>
			</div>
		</>
	);
}

export default PsychologistSide;
