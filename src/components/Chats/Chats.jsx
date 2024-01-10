import React from 'react';
import { NavLink } from 'react-router-dom';
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
				<li className={cls.chatItem}>
					<h2 className={cls.chatNumber}>Заявка №42</h2>
					<p className={cls.name}>Имя: Анастасия</p>
					<p className={cls.problem}>
						Проблема: Психосоматика / физическое здоровье
					</p>
					<NavLink to="/messages" className={cls.chatButton}>
						Подключиться
					</NavLink>
				</li>
				<li className={cls.chatItem}>
					<h2 className={cls.chatNumber}>Заявка №43</h2>
					<p className={cls.name}>Имя: User</p>
					<p className={cls.problem}>Проблема: Семейные проблемы</p>
					<NavLink to="/messages" className={cls.chatButton}>
						Подключиться
					</NavLink>
				</li>
				<li className={cls.chatItem}>
					<h2 className={cls.chatNumber}>Заявка №44</h2>
					<p className={cls.name} />
					<p className={cls.problem}>
						Проблема: Я не знаю что со мной
					</p>
					<NavLink to="/messages" className={cls.chatButton}>
						Подключиться
					</NavLink>
				</li>

				{/* {chats.map((chat) => (
                        <Chat key={chat.id} id={chat.id} name={chat.name}/>
                    ))} */}
			</ul>
		</main>
	);
}

export default Chats;
