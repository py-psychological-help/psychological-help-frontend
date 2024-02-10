import React from 'react';
import { useNavigate } from 'react-router-dom';
import cls from './ClientSide.module.scss';
import Messages from '../Messages/Messages';

function ClientSide() {
	const navigate = useNavigate();
	const handleCloseButtonClick = () => {
		navigate('/');
	};
	return (
		<div className={cls.clientSide}>
			<div className={cls.row}>
				<h1 className={cls.title}>Чат с психологом </h1>
				<button
					className={cls.close}
					type="button"
					onClick={handleCloseButtonClick}
				>
					Завершить чат
				</button>
			</div>
			<div className={cls.messagesContainer}>
				<Messages />
			</div>
		</div>
	);
}

export default ClientSide;
