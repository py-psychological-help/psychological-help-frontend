import React from 'react';
import { Link } from 'react-router-dom';
import cls from './WelcomePage.module.scss';
import Button from '../../components/buttonRegister/Button';

export default function WelcomePage() {
	return (
		<div className={cls.container}>
			<h1 className={cls.header}>Приветствуем вас на нашем ресурсе</h1>
			<p className={cls.caption}>
				Наша миссия помочь людям раскрыть их внутреннюю силу, чтобы
				справляться с трудностями и жить в гармонии с собой.
			</p>
			<h2 className={cls.subtitle}>
				Для того, чтобы присоединиться к нашей команде психологов
				необходимо иметь:
			</h2>
			<ul className={cls.list}>
				<li className={cls.listItem}>Профильное образование</li>
				<li className={cls.listItem}>Опыт работы с клиентами</li>
				<li className={cls.listItem}>
					Подходы признанные научным сообществом
				</li>
			</ul>
			<Link to="/signup" className={cls.link}>
				<Button type="button" name="Хочу в команду" />
			</Link>
		</div>
	);
}
