import {Link} from 'react-router-dom';
import cls from './RegisterPage.module.scss';
import Button from '../../components/buttonRegister/Button';

const RegisterPage = () => (
	<section className={cls.registration}>
		<h1 className={cls.greeting}>Приветствие</h1>
		<p className={cls.description}>Описание кратко, миссия</p>
		<h2 className={cls.aboutUs}>Факты о нас</h2>
		<ul className={cls.statistics}>
			<li className={cls.statisticItem}>
				<img className={cls.statImg} src="" alt="Статистика"/>
				<p>250+</p>
			</li>
			<li className={cls.statisticItem}>
				<img className={cls.statImg} src="" alt="Статистика"/>
				<p>600+</p>
			</li>
			<li className={cls.statisticItem}>
				<img className={cls.statImg} src="" alt="Статистика"/>
				<p>1.8K+</p>
			</li>
			<li className={cls.statisticItem}>
				<img className={cls.statImg} src="" alt="Статистика"/>
				<p>11K+</p>
			</li>
		</ul>
		<div className={cls.hr}/>
		<ul className={cls.info}>
			<li className={cls.infoItem}>
				<h3>С кем мы работаем</h3>
				<img src="" alt=""/>
			</li>
			<li className={cls.infoItem}>
				<h3>Что психологу нужно для работы</h3>
				<ul className={cls.infoList}>
					<li>1</li>
					<li>2</li>
					<li>3</li>
				</ul>
			</li>
		</ul>
		<Link to="step_1" className={cls.linkNext}>
			<Button name="Хочу в команду"/>
		</Link>
	</section>
);

export default RegisterPage;
