import React, { useState } from 'react';
import cls from './Messages.module.scss';
import MessageInput from '../MessageInput/MessageInput';
// import tail from '../../images/tail.svg';

const Messages = () => {
	return (
		<div className={cls.messagesContainer}>
			<ul className={cls.messagesList}>
				<li className={`${cls.messageItem} ${cls.me}`}>
					<p className={cls.chatBubble}>
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

				<li className={`${cls.messageItem} ${cls.other}`}>
					<p className={cls.chatBubble}>
						Здравствуйте. (клиент описывает свою проблему и
						спрашивает как проходит сессия)
					</p>
				</li>

				{/* {messages.map((message) => (
          <div key={message.id} className={`chatBubble ${message.sender}`}>
            {message.text}
          </div>
        ))} */}

				<MessageInput />
			</ul>
		</div>
	);
};

export default Messages;
