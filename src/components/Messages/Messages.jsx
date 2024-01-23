import React from 'react';
import cls from './Messages.module.scss';
import MessageInput from '../MessageInput/MessageInput';
import Message from '../Message/Message';
import chats from '../../utils/chats';

function Messages() {
	return (
		<div className={cls.messagesContainer}>
			<ul className={cls.messagesList}>
				{chats.map((chat) =>
					chat.messages.map((message) => (
						<Message
							key={message.id}
							text={message.text}
							isAuthorMe={message.is_author_me}
						/>
					))
				)}
				<MessageInput />
			</ul>
		</div>
	);
}

export default Messages;
