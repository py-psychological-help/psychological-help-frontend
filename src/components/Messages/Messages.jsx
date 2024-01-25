import React from 'react';
import cls from './Messages.module.scss';
import MessageInput from '../MessageInput/MessageInput';
import Message from '../Message/Message';

function Messages({ selectedChat }) {
	return (
		<div className={cls.messagesContainer}>
			<ul className={cls.messagesList}>
				{selectedChat.messages.map((message) => (
					<Message
						key={message.id}
						text={message.text}
						isAuthorMe={message.is_author_me}
					/>
				))}
				<MessageInput />
			</ul>
		</div>
	);
}

export default Messages;
