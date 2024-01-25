import React from 'react';
import cls from './Chatinfo.module.scss';
import arrowDown from '../../images/arrow-down.svg';

function ChatInfo({ selectedChat }) {
	return (
		<div className={cls.info}>
			<div className={cls.number}>
				<h1
					className={cls.numberText}
				>{`Заявка №${selectedChat.id}`}</h1>
				<button className={cls.button} type="button">
					<img
						src={arrowDown}
						alt="стрелка вниз"
						className={cls.arrow}
					/>
				</button>
			</div>
			<h2 className={cls.subtitle}>Имя</h2>
			<p className={cls.text}>{selectedChat.psychologist.first_name}</p>
			<h2 className={cls.subtitle}>Проблема</h2>
			<p className={cls.text}>{selectedChat.psychologist.complaint}</p>
		</div>
	);
}

export default ChatInfo;
