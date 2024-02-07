import React from 'react';
import { Link } from 'react-router-dom';
import cls from './WelcomePage.module.scss';
import Button from '../../components/buttonRegister/Button';

export default function WelcomePage() {
	const isValid = true;
	return (
		<div className={cls.container}>
			<h1 className={cls.header}>Приветствуем тебя на нашем ресурсе!</h1>
			<p className={cls.caption}>
				Наша миссия помочь людям раскрыть их внутреннюю силу, чтобы
				справляться с трудностями и жить в гармонии с собой.
			</p>
			<h2 className={cls.profits}>С нами ты получишь:</h2>
			<ol className={cls.profitsList}>
				<li className={cls.profitItem}>
					Возможность управления заявками и выбором тем
				</li>
				<li className={cls.profitItem}>
					Инструмент для развития навыков
				</li>
				<li className={cls.profitItem}>
					Возможность работать из любой точки мира в любое время
				</li>
			</ol>
			<h2 className={cls.required}>
				Для того, чтобы присоединиться к нашей команде психологов
				необходимо иметь
			</h2>
			<ul className={cls.requiredList}>
				<li className={cls.requiredItem}>Профильное образование</li>
				<li className={cls.requiredItem}>Опыт работы с клиентами</li>
				<li className={cls.requiredItem}>
					Подходы признанные научным сообществом
				</li>
			</ul>
			<Link to="/signup" className={cls.link}>
				<Button type="button" name="Хочу в команду" isValid={isValid} />
			</Link>
		</div>
	);
}
