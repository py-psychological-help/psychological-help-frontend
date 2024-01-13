import React from 'react';
import cls from './ClientSide.module.scss';
import Messages from '../Messages/Messages';

function ClientSide() {
	return (
		<div className={cls.clientSide}>
			<h1 className={cls.title}>Чат с психологом</h1>
			<Messages />
		</div>
	);
}

export default ClientSide;
