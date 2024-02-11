import React, { useState, useRef } from 'react';
import clsx from 'clsx';
import cls from './MessageInput.module.scss';

const MessageInput = ({ onSend, className }) => {
	const [text, setText] = useState('');
	const [isError, setIsError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const textareaRef = useRef(null);

	const handleMessageInputChange = () => {
		const textareaValue = textareaRef.current.value;
		if (textareaValue.trim().length === 0) {
			setIsError(true);
			setErrorMessage('Сообщение не может быть пустым.');
		} else if (textareaValue.length > 1000) {
			setIsError(true);
			setErrorMessage('Сообщение не может превышать 1000 символов.');
		} else {
			setIsError(false);
			setErrorMessage('');
		}
	};

	const handleSend = () => {
		if (!isError && text.trim() !== '' && text.length <= 1000) {
			onSend(text);
			setText('');
			textareaRef.current.style.height = 'auto';
		}
	};

	const handleKeyPress = (e) => {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			handleSend();
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
					onKeyDown={handleKeyPress}
					className={clsx(cls.messageInput, className, {
						[cls.errorInput]: isError,
					})}
				/>
				{isError && (
					<span
						className={clsx(cls.errorText, className, {
							[cls.visible]: isError,
						})}
					>
						{errorMessage}
					</span>
				)}
			</div>
			<button
				type="button"
				className={clsx(cls.submitButton, className, {
					[cls.disabled]: isError,
				})}
				onClick={handleSend}
				disabled={isError}
			>
				Отправить
			</button>
		</form>
	);
};

export default MessageInput;
