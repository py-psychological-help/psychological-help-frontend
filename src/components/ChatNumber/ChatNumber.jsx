import React, { useCallback, useState } from 'react';
import clsx from 'clsx';
import cls from './ChatNumber.module.scss';
import arrowDown from '../../images/arrow-down.svg';
import ChatInfo from '../ChatInfo/ChatInfo';

function ChatNumber(props) {
	const [isChatInfoOpened, setIsChatInfoOpened] = useState(false);
	const [isInvisible, setIsInvisible] = useState(false);
	// eslint-disable-next-line react/prop-types
	const { className, id, selectedChat } = props;

	const handleChatNumberClick = useCallback(() => {
		setIsChatInfoOpened(true);
		setIsInvisible(true);
	}, []);

	return (
		<>
			<div
				className={clsx(cls.container, className, {
					[cls.invisible]: isInvisible,
				})}
			>
				<h1 className={cls.number}>{`Заявка №${selectedChat.id}`}</h1>
				<button
					className={cls.button}
					type="button"
					onClick={handleChatNumberClick}
				>
					<img
						src={arrowDown}
						alt="стрелка вниз"
						className={cls.arrow}
					/>
				</button>
			</div>

			{isChatInfoOpened && (
				<ChatInfo
					isChatInfoOpened={isChatInfoOpened}
					selectedChat={selectedChat}
				/>
			)}
		</>
	);
}

export default ChatNumber;
