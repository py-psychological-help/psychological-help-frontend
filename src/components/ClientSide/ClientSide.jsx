import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import cls from './ClientSide.module.scss';
import Messages from '../Messages/Messages';

function ClientSide() {
	const navigate = useNavigate();
	const archiveButtonRef = useRef(null);
	const handleCloseButtonClick = () => {
		navigate('/');
	};
	return (
		<div className={cls.clientSide}>
			<div className={cls.row}>
				<h1 className={cls.title}>Чат с психологом </h1>
				<button
					ref={archiveButtonRef}
					className={cls.close}
					type="button"
					onClick={handleCloseButtonClick}
				>
					Завершить чат
				</button>
			</div>
			<div className={cls.messagesContainer}>
				<Messages archiveButtonRef={archiveButtonRef} />
			</div>
		</div>
	);
}

export default ClientSide;
