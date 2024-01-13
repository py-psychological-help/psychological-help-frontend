import React from 'react';
import cls from './PsychologistSide.module.scss';
import ChatNumber from '../ChatNumber/ChatNumber';
import Messages from '../Messages/Messages';

function PsychologistSide() {
	return (
		<div className={cls.container}>
			<ChatNumber />
			<Messages />
			<button className={cls.close} type="button">
				Завершить чат
			</button>
		</div>
	);
}

export default PsychologistSide;
