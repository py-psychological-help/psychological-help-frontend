import React, { useState } from 'react';
import clsx from 'clsx';
import cls from './Chats.module.scss';
import Chat from '../Chat/Chat';
import chats from '../../utils/chats';

function Chats(props) {
	const [isActive, setIsActive] = useState(0);

	const { className } = props;

	return (
		<main className={cls.chats}>
			<h1 className={cls.title}>Чаты</h1>
			<ul className={cls.dashboard}>
				<li>
					<button
						type="button"
						id={1}
						onClick={() => {
							setIsActive(1);
						}}
						className={clsx(cls.dashboardItem, className, {
							[cls.active]: isActive === 1,
						})}
					>
						Ожидающие
					</button>
				</li>
				<li>
					<button
						type="button"
						id={2}
						onClick={() => setIsActive(2)}
						className={clsx(cls.dashboardItem, className, {
							[cls.active]: isActive === 2,
						})}
					>
						Активные
					</button>
				</li>
				<li>
					<button
						type="button"
						id={3}
						onClick={() => setIsActive(3)}
						className={clsx(cls.dashboardItem, className, {
							[cls.active]: isActive === 3,
						})}
					>
						Архив
					</button>
				</li>
			</ul>
			<ul className={cls.chatsList}>
				{chats.map((chat) => (
					<Chat
						key={chat.id}
						id={chat.id}
						firstName={chat.client.first_name}
						complaint={chat.client.complaint}
					/>
				))}
			</ul>
			<span className={cls.span}>
				Чтобы начать работать с нами, завершите регистрацию. Перейдите
				во вкладку Профиль/ Документы и загрузите все необходимые
				документы для работы на сервисе
			</span>
		</main>
	);
}

export default Chats;
