import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cls from './MessageInput.module.scss';

const MessageInput = ({ onSend }) => {
	const [text, setText] = useState('');

	const handleSend = () => {
		if (text.trim() !== '') {
			onSend(text, 'me');
			setText('');
		}
	};

	return (
		<div className={cls.messageForm}>
			<input
				className={cls.messageInput}
				type="text"
				value={text}
				onChange={(e) => setText(e.target.value)}
				placeholder="Сообщение"
			/>
			<button className={cls.submitButton} onClick={handleSend}>
				Отправить
			</button>
		</div>
	);
};

MessageInput.propTypes = {
	onSend: PropTypes.func.isRequired,
};

export default MessageInput;
