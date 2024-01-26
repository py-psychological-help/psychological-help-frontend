import React from 'react';
import cls from './Message.module.scss';

function Message({ text, isAuthorMe }) {
	const className = isAuthorMe === true ? cls.me : cls.other;
	return (
		<li className={`${cls.messageItem} ${className}`}>
			<p className={cls.chatBubble}>{text}</p>
		</li>
	);
}

export default Message;
