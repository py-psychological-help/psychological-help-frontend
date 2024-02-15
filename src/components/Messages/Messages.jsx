import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import cls from './Messages.module.scss';
import MessageInput from '../MessageInput/MessageInput';
import Message from '../Message/Message';
import { sendChatLink } from '../../slices/chatsSlice/sendChatLinkAction';

function Messages({ selectedChat, archiveButtonRef }) {
	const [ws, setWs] = useState(null);
	const [messages, setMessages] = useState([]);
	const [error, setError] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { key: chatSecretKey } = useParams();
	const token = useSelector((state) => state.auth.authToken);
	const messagesListRef = useRef(null);
	const chatNew = selectedChat?.new;

	useEffect(() => {
		// if (chatNew) {
		//     dispatch(sendChatLink(chatSecretKey));
		//     console.log('Новый чат');
		// }
		const socket = new WebSocket(
			`wss://dpogovorim.ru/ws/chat/${chatSecretKey}/?token=${token}`
		);

		socket.onopen = () => {
			console.log('Подключился к вебсокету');
		};

		socket.onmessage = (e) => {
			const data = JSON.parse(e.data);

			if (data.error) {
				setError(true);
				return;
			}
			setMessages((prevState) => [...prevState, JSON.parse(e.data)]);
		};

		archiveButtonRef.current.addEventListener('click', () => {
			socket.send(JSON.stringify({ action: 'archive_chat' }));
			setTimeout(() => navigate('/account-chat'), 0);
		});

		setWs(socket);

		return () => {
			socket.close();
		};
	}, [token, chatSecretKey, chatNew, dispatch, archiveButtonRef, navigate]);

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
			{!error ? (
				<>
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
				</>
			) : (
				<h1>Чат уже занят</h1>
			)}
		</div>
	);
}

export default Messages;
