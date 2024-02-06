import React, { useState, useRef } from 'react';
import clsx from 'clsx';
import cls from './MessageInput.module.scss';

const MessageInput = ({ onSend, className }) => {
	const [text, setText] = useState('');
	const [isError, setIsError] = useState(false);

	const textareaRef = useRef(null);

	const wordsRegex = /\b\w+\b.*\b\w+\b/; // поменять

	const handleMessageInputChange = () => {
		const textarea = textareaRef.current;
		textarea.style.height = 'auto';
		textarea.style.height = `${textarea.scrollHeight}px`;
		if (!wordsRegex.test(textarea.value)) {
			setIsError(true);
		} else {
			setIsError(false);
		}
	};

	const handleSend = () => {
		if (text.trim() !== '' && !isError) {
			onSend(text, true);
			setText('');
			textareaRef.current.style.height = 'auto';
		}
	};

	return (
		<form className={cls.messageForm} noValidate>
			<div className={cls.container}>
				<textarea
					ref={textareaRef}
					name="messageInput"
					value={text}
					onChange={(e) => {
						setText(e.target.value);
						handleMessageInputChange();
					}}
					className={clsx(cls.messageInput, className, {
						[cls.errorInput]: isError,
					})}
				/>
				<span
					className={clsx(cls.errorText, className, {
						[cls.visible]: isError,
					})}
				>
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
		</form>
	);
};

export default MessageInput;
