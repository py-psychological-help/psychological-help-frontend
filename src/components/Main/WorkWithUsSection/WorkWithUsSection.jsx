import React from 'react';
import { Link } from 'react-router-dom';
import styles from './WorkWithUsSection.module.scss';
import Button from '../../buttonHeader/Button';

function WorkWithUsSection() {
	return (
		<section className={styles.warningSection}>
			<h2 className={styles.mainSubHeader}>Психологам</h2>

			<p className={styles.mainText}>
				Если ты&nbsp;профессиональный психолог, психиатр или&nbsp;психотерапевт&nbsp;&mdash;
				зарегистрируйся и&nbsp;получи доступ ко&nbsp;всем преимуществам нашего сервиса.
			</p>

			<div className={styles.featuresBlock}>
				<div className={styles.featuresElement}>
					<h3 className={styles.featuresHeader}>Онлайн-чат</h3>
					<p className={styles.featuresText}>
						У&nbsp;тебя будет возможность консультировать пользователей сервиса в&nbsp;нашем анонимном чате.
					</p>
				</div>

				<div className={styles.featuresElement}>

					<h3 className={styles.featuresHeader}>Практика</h3>
					<p className={styles.featuresText}>
						Прокачаешь свои навыки и&nbsp;приобретешь новый опыт.
					</p>
				</div>

				<div className={styles.featuresElement}>
					<h3 className={styles.featuresHeader}>Личный кабинет</h3>
					<p className={styles.featuresText}>
						Сможешь управлять заявками и&nbsp;работать в&nbsp;удобное время.
					</p>
				</div>
			</div>

			<Link to="/welcome" className={styles.link}>
				<Button
					additionalStyles={styles.mainBtn}
					buttonText="Работать с нами"
				/>
			</Link>
		</section>
	);
}

export default WorkWithUsSection;
