import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cls from './MessageInput.module.scss';
import arrow from '../../images/arrow.svg';

const MessageInput = ({ onSend }) => {
	const [text, setText] = useState('');

	const handleSend = () => {
		if (text.trim() !== '') {
			onSend(text);
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
			<button
				type="button"
				className={cls.submitButton}
				onClick={handleSend}
			>
				<img src={arrow} alt="стрелка" className={cls.arrow} />
			</button>
		</div>
	);
};

MessageInput.propTypes = {
	onSend: PropTypes.func.isRequired,
};

export default MessageInput;
