import React from 'react';
import cls from './Chats.module.scss';
import Chat from '../Chat/Chat';

const chats = [
	{
		client: {
			first_name: 'Анастасия',
			complaint: 'Психосоматика / физическое здоровье',
		},
		id: 42,
	},

	{
		client: {
			first_name: 'User',
			complaint: 'Семейные проблемы',
		},
		id: 43,
	},
	{
		client: {
			first_name: '',
			complaint: 'Я не знаю что со мной',
		},
		id: 44,
	},
];

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
		</main>
	);
}

export default Chats;
