import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import cls from './Chats.module.scss';
import Chat from '../Chat/Chat';
// import chats from '../../utils/chats';
import { fetchChats } from '../../slices/chatsSlice/chatsActions';

const Chats = ({ className, onSelect }) => {
	const [isVerified, setIsVerified] = useState(false);
	const selectChats = useSelector((state) => state.chats.chats);
	const dispatch = useDispatch();
	const userData = useSelector((state) => state.user.userData);

	useEffect(() => {
		if (userData) setIsVerified(userData.approved);
	}, [userData]);

	useEffect(() => {
		dispatch(fetchChats());
	}, [dispatch]);

	const [isFiltered, setIsFiltered] = useState('new');

	let filteredAndSortedChats = selectChats;

	if (isFiltered === 'active') {
		filteredAndSortedChats = selectChats
			.filter(
				(chat) =>
					chat.psychologist?.last_name === userData.last_name &&
					chat.active === true
			)
			.sort((a, b) => {
				const lastMessageA =
					a.messages[a.messages.length - 1]?.date_time;
				const lastMessageB =
					b.messages[b.messages.length - 1]?.date_time;
				console.log(new Date(lastMessageB) - new Date(lastMessageA));
				return new Date(lastMessageB) - new Date(lastMessageA);
			});
	} else if (isFiltered === 'new') {
		filteredAndSortedChats = selectChats.filter((chat) => chat.new);
	} else if (isFiltered === 'archive') {
		filteredAndSortedChats = selectChats.filter(
			(chat) =>
				chat.psychologist?.last_name === userData.last_name &&
				chat.active === false
		);
	}

	const isActiveChatExist = selectChats.some((chat) => chat.active);
	const handleConnectBtnDisabled = useCallback(() => {
		if (isActiveChatExist && isFiltered === 'new') {
			return true;
		}
		return false;
	}, [isActiveChatExist, isFiltered]);

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
						disabled={!isVerified}
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
						disabled={!isVerified}
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
						disabled={!isVerified}
					>
						Архив
					</button>
				</li>
			</ul>
			{isVerified ? (
				<ul className={cls.chatsList}>
					{filteredAndSortedChats.map((chat) => (
						<Chat
							key={chat.id}
							chat={chat}
							onSelect={onSelect}
							onDisable={handleConnectBtnDisabled}
						/>
					))}
				</ul>
			) : (
				<div
					className={clsx(cls.span, className, {
						[cls.visible]: !isVerified,
					})}
				>
					<p className={cls.text}>
						Чтобы начать работать с нами, завершите регистрацию.
					</p>
					<p className={cls.text}>
						Перейдите во вкладку Профиль/Документы и загрузите все
						необходимые документы для работы на сервисе.
					</p>
				</div>
			)}
		</main>
	);
};

export default Chats;
