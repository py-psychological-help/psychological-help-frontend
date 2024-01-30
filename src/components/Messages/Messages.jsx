import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import cls from './Messages.module.scss';
import MessageInput from '../MessageInput/MessageInput';
import Message from '../Message/Message';

function Messages({ selectedChat }) {
	const [ws, setWs] = useState(null);
	const [messages, setMessages] = useState([]);
	const chatSecretKey = '7fdKYDAYgFASHOMoe5mi';
	const token = useSelector((state) => state.auth.authToken);

	useEffect(() => {
		const socket = new WebSocket(
			`ws://127.0.0.1:8000/ws/chat/${chatSecretKey}/?token=${token}}`
		);
		// const socket = new WebSocket(`wss://socketsbay.com/wss/v2/1/demo/`);

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
