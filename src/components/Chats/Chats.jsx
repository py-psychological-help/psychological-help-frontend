import React, { useState } from 'react';
import clsx from 'clsx';
import cls from './Chats.module.scss';
import Chat from '../Chat/Chat';
import chats from '../../utils/chats';

function Chats(props) {
	const [isSelected, setIsSelected] = useState();

	const filteredChats = chats.filter((chat) => {
		if (isSelected === 'active') return chat.active;
		if (isSelected === 'new') return chat.new;
		if (isSelected === 'archive') return chat.archive;
		return chats;
	});

	const { className } = props;

	return (
		<main className={cls.chats}>
			<h1 className={cls.title}>Чаты</h1>
			<ul className={cls.dashboard}>
				<li>
					<button
						type="button"
						onClick={() => setIsSelected('active')}
						className={clsx(cls.dashboardItem, className, {
							[cls.active]: isSelected === 'active',
						})}
					>
						Ожидающие
					</button>
				</li>
				<li>
					<button
						type="button"
						onClick={() => setIsSelected('new')}
						className={clsx(cls.dashboardItem, className, {
							[cls.active]: isSelected === 'new',
						})}
					>
						Активные
					</button>
				</li>
				<li>
					<button
						type="button"
						onClick={() => setIsSelected('archive')}
						className={clsx(cls.dashboardItem, className, {
							[cls.active]: isSelected === 'archive',
						})}
					>
						Архив
					</button>
				</li>
			</ul>
			<ul className={cls.chatsList}>
				{filteredChats.map((chat) => (
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
