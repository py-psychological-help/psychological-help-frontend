import React, { memo } from 'react';
import cls from './Message.module.scss';

const Message = memo(({ text, isAuthorMe }) => {
	const className = isAuthorMe === true ? cls.me : cls.other;
	return (
		<li className={`${cls.messageItem} ${className}`}>
			<p className={cls.chatBubble}>{text}</p>
		</li>
	);
});

export default Message;
