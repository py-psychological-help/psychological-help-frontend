import React from 'react';
import cls from './Chats.module.scss';
import Chat from '../Chat/Chat';
import chats from '../../utils/chats';

function Chats() {
	return (
		<main className={cls.chats}>
			<h1 className={cls.title}>Чаты</h1>
			<ul className={cls.dashboard}>
				<li>
					<button className={`${cls.dashboardItem} ${cls.active}`}>
						Ожидающие
					</button>
				</li>
				<li>
					<button className={cls.dashboardItem}>Активные</button>
				</li>
				<li>
					<button className={cls.dashboardItem}>Архив</button>
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
