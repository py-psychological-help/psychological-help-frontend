import React from 'react';
import { useNavigate } from 'react-router-dom';
import cls from './WelcomePage.module.scss';
// import Button from '../../components/buttonRegister/Button';
import Button from '../../components/buttonHeader/Button';

export default function WelcomePage() {
	const isValid = true;
	const navigate = useNavigate();

	return (
		<section className={cls.WelcomePageSection}>
			<div className={cls.container}>
				<h1 className={cls.header}>
					Приветствуем тебя на нашем ресурсе!
				</h1>
				<p className={cls.caption}>
					Наша миссия помочь людям раскрыть их&nbsp;внутреннюю силу,
					чтобы&nbsp;справляться с&nbsp;трудностями и&nbsp;жить
					в&nbsp;гармонии с&nbsp;собой.
				</p>
				<h2 className={cls.subtitle}>С нами ты получишь:</h2>
				<div className={cls.line}>
					<div className={`${cls.lineNumber} ${cls.icon1}`} />
					<p className={cls.lineText}>
						Возможность управления заявками и&nbsp;выбором тем
					</p>
				</div>

				<div className={cls.line}>
					<div className={`${cls.lineNumber} ${cls.icon2}`} />
					<p className={cls.lineText}>
						Инструмент для развития навыков
					</p>
				</div>

				<div className={cls.line}>
					<div className={`${cls.lineNumber} ${cls.icon3}`} />
					<p className={cls.lineText}>
						Возможность работать из&nbsp;любой точки мира
						в&nbsp;любое время
					</p>
				</div>

				<h3 className={cls.subSubTitle}>
					Для того, чтобы присоединиться к&nbsp;нашей команде
					психологов необходимо&nbsp;иметь
				</h3>

				<ul className={cls.list}>
					<li className={cls.listItem}>Профильное образование</li>
					<li className={cls.listItem}>Опыт работы с клиентами</li>
					<li className={cls.listItem}>
						Подходы признанные научным сообществом
					</li>
				</ul>
				{/* <Link to="/signup" className={cls.link}>
				<Button type="button" name="Хочу в команду" isValid={isValid} />
			</Link> */}
				<Button
					additionalStyles={cls.mainBtn}
					buttonText="Хочу в команду"
					onClick={() => navigate('/signup')}
				/>
			</div>
		</section>
	);
}
