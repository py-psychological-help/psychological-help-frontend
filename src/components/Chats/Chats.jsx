import React from 'react';
import cls from './Chats.module.scss';
import Chat from '../Chat/Chat';

const chats = [
	{
		id: 10,
		name: 'Проблема первые 5 слов.. в 1 строку',
	},
	{
		id: 5,
		name: 'Проблема первые 5 слов.. в 1 строку',
	},
	{
		id: 3,
		name: 'Проблема первые 5 слов.. в 1 строку',
	},
];

function Chats() {
	return (
		<>
			{/* <Sidebar /> */}
			<main className={cls.chats}>
				<h1 className={cls.title}>Чаты</h1>
				<ul className={cls.dashboard}>
					<li>
						<button
							className={`${cls.dashboardItem} ${cls.active}`}
						>
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
						<Chat key={chat.id} id={chat.id} name={chat.name} />
					))}
				</ul>
			</main>
		</>
	);
}

export default Chats;
