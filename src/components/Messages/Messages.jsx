import React, { useState } from 'react';
import cls from './Messages.module.scss';
import MessageInput from '../MessageInput/MessageInput';
// import Button from '../button/Button';

const Messages = () => {
	const [messages, setMessages] = useState([
		{ text: 'Привет, как дела?', sender: 'other', id: 1 },
		{ text: 'Привет! Всё отлично, спасибо.', sender: 'me', id: 2 },
	]);

	const handleMessageSend = (text, sender, id) => {
		const newMessage = { text, sender, id };
		setMessages([...messages, newMessage]);
	};

	return (
		<div className={cls.messagesContainer}>
			<ul className={cls.messagesList}>
				<li className={`${cls.chatBubble} ${cls.me}`}>
					<p className={cls.messageText}>
						Рад приветствовать тебя на нашей онлайн-платформе для
						консультаций. Меня зовут Иван Иванов( краткая информация
						о специализации психолога и опыте работы) Если у вас
						есть какие-то предпочтения относительно формата нашего
						взаимодействия или если есть что-то, что вы хотели бы
						обсудить в первую очередь, не стесняйтесь сообщить мне.
						Ваш опыт и ваши чувства имеют первостепенное значение, и
						я готов адаптироваться к вашим потребностям.
					</p>
				</li>
				<li className={`${cls.chatBubble} ${cls.other}`}>
					<p className={cls.messageText}>
						Здравствуйте. (клиент описывает свою проблему и
						спрашивает как проходит сессия)
					</p>
				</li>
				{/* {messages.map((message) => (
          <div key={message.id} className={`chatBubble ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div> */}
				<MessageInput onSend={handleMessageSend} />
			</ul>
		</div>
	);
};

export default Messages;
