import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import cls from './Messages.module.scss';
import MessageInput from '../MessageInput/MessageInput';
import Message from '../Message/Message';

function Messages({ selectedChat }) {
	const [ws, setWs] = useState(null);
	const [messages, setMessages] = useState([]);
	const chatSecretKey = 'apNrl6L4GhAsj9uj76DP';
	const token = useSelector((state) => state.auth.authToken);

	useEffect(() => {
		const socket = new WebSocket(
			`ws://dpogovorim.ru:8011/ws/chat/${chatSecretKey}/?token=${token}`
		);

		socket.onopen = () => {
			console.log('Подключился к вебсокету');
		};

		socket.onmessage = (e) => {
			console.log('Получил сообщение: ', e.data);
			setMessages((prevState) => [...prevState, JSON.parse(e.data)]);
		};

		setWs(socket);

		return () => {
			socket.close();
		};
	}, [token]);

	const sendMessage = (message) => {
		if (ws) {
			ws.send(message);
			console.log(typeof message);
			console.log('Отправил сообщение', message);
		}
	};

	return (
		<div className={cls.messagesContainer}>
			<ul className={cls.messagesList}>
				{messages.map((data) => (
					<Message
						key={data.date}
						text={data.message}
						isAuthorMe={data.psy}
					/>
				))}
				<MessageInput onSend={sendMessage} />
			</ul>
		</div>
	);
}

export default Messages;
