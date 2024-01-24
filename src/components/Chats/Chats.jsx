import React, { useState } from 'react';
import clsx from 'clsx';
import cls from './Chats.module.scss';
import Chat from '../Chat/Chat';
import chats from '../../utils/chats';

function Chats({ className, onSelect }) {
	const [isFiltered, setIsFiltered] = useState('new');

	const filteredChats = chats.filter((chat) => {
		if (isFiltered === 'active') return chat.active;
		if (isFiltered === 'new') return chat.new;
		if (isFiltered === 'archive') return chat.archive;
		return chats;
	});

	return (
		<main className={cls.chats}>
			<h1 className={cls.title}>Чаты</h1>
			<ul className={cls.dashboard}>
				<li>
					<button
						type="button"
						onClick={() => setIsFiltered('new')}
						className={clsx(cls.dashboardItem, className, {
							[cls.active]: isFiltered === 'new',
						})}
					>
						Ожидающие
					</button>
				</li>
				<li>
					<button
						type="button"
						onClick={() => setIsFiltered('active')}
						className={clsx(cls.dashboardItem, className, {
							[cls.active]: isFiltered === 'active',
						})}
					>
						Активные
					</button>
				</li>
				<li>
					<button
						type="button"
						onClick={() => setIsFiltered('archive')}
						className={clsx(cls.dashboardItem, className, {
							[cls.active]: isFiltered === 'archive',
						})}
					>
						Архив
					</button>
				</li>
			</ul>
			<ul className={cls.chatsList}>
				{filteredChats.map((chat) => (
					<Chat key={chat.id} chat={chat} onSelect={onSelect} />
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
