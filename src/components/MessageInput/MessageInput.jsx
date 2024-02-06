import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import cls from './MessageInput.module.scss';

const MessageInput = ({ onSend }) => {
	const [text, setText] = useState('');
	const textareaRef = useRef(null);

	const handleInputChange = () => {
		const textarea = textareaRef.current;
		textarea.style.height = 'auto';
		textarea.style.height = `${textarea.scrollHeight}px`;
	};

	const handleSend = () => {
		if (text.trim() !== '') {
			onSend(text, true);
			setText('');
			textareaRef.current.style.height = 'auto';
		}
	};

	return (
		<div className={cls.messageForm}>
			<div className={cls.container}>
				<textarea
					ref={textareaRef}
					className={cls.messageInput}
					name="messageInput"
					value={text}
					onChange={(e) => {
						setText(e.target.value);
						handleInputChange();
					}}
				/>
				<span className={cls.errorText}>
					Ошибка, слишком кратко описана проблема, минимум 2 слова.
				</span>
			</div>
			<button
				type="button"
				className={cls.submitButton}
				onClick={handleSend}
			>
				Отправить
			</button>
		</div>
	);
};

MessageInput.propTypes = {
	onSend: PropTypes.func.isRequired,
};

export default MessageInput;
