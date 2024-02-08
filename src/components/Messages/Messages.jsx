import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import cls from './Messages.module.scss';
import MessageInput from '../MessageInput/MessageInput';
import Message from '../Message/Message';

function Messages({ selectedChat }) {
	const [ws, setWs] = useState(null);
	const [messages, setMessages] = useState([]);

	const { key: chatSecretKey } = useParams();
	// const chatSecretKey = 'apNrl6L4GhAsj9uj76DP';
	const token = useSelector((state) => state.auth.authToken);
	const messagesListRef = useRef(null);

	useEffect(() => {
		const socket = new WebSocket(
			`wss://dpogovorim.ru:8011/ws/chat/${chatSecretKey}/?token=${token}`
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
	}, [token, chatSecretKey]);

	useEffect(() => {
		if (messagesListRef.current) {
			messagesListRef.current.scrollTop =
				messagesListRef.current.scrollHeight;
		}
	}, [messages]);

	const sendMessage = (message) => {
		if (ws) {
			ws.send(message);
			console.log(typeof message);
			console.log('Отправил сообщение', message);
		}
	};

	return (
		<div className={cls.messagesContainer}>
			<ul ref={messagesListRef} className={cls.messagesList}>
				{messages.map((data) => (
					<Message
						key={data.date}
						text={data.message}
						isAuthorMe={data.psy}
					/>
				))}
			</ul>
			<MessageInput onSend={sendMessage} />
		</div>
	);
}

export default Messages;
