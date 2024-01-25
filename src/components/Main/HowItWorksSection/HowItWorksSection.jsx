import React, { useState } from 'react';
import validator from 'validator';
import styles from './HowItWorksSection.module.scss';

const HowItWorksSection = () => {
	const [formData, setFormData] = useState({
		text: '',
		email: '',
		name: '',
		disableName: false,
	});

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: type === 'checkbox' ? checked : value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Submitted Data:', formData);
	};

	return (
		<section id="howItWorksSection" className={styles.howItWorksSection}>
			<h2 className={`${styles.mainSubHeader} ${styles.boldLeft}`}>
				Как это работает
			</h2>

			<div className={styles.featuresBlock}>
				<div className={styles.featuresElement}>
					<h2 className={styles.mainSubHeader}>1</h2>
					<p className={styles.featuresText}>
						Оставляете заявку в форме
					</p>
				</div>

				<div className={styles.featuresElement}>
					<h2 className={styles.mainSubHeader}>2</h2>
					<p className={styles.featuresText}>
						Психолог обрабатывает ваш запрос
					</p>
				</div>

				<div className={styles.featuresElement}>
					<h2 className={styles.mainSubHeader}>3</h2>
					<p className={styles.featuresText}>
						Вы получаете консультацию с помощью нашего онлайн — чата
					</p>
				</div>
			</div>

			<div className={styles.helpFormBlock}>
				<h2 className={styles.mainSubHeader}>Обратиться за помощью</h2>
				<p className={styles.featuresText}>
					Для того чтобы отправить заявку, заполните форму обращения.
				</p>

				<form className={styles.helpForm} onSubmit={handleSubmit}>
					<div className={styles.textInputBlock}>
						<label htmlFor="text">
							<textarea
								className={styles.textInput}
								id="text"
								name="text"
								value={formData.text}
								onChange={handleChange}
								required
								rows="10"
								placeholder="Опишите кратко вашу проблему для работы с психологом."
							/>
						</label>
						<div className={styles.textInputInfo}>
							<p className={styles.featuresText}>
								Вся информация, которую вы оставите на сайте или
								обсудите с психологом конфиденциальна.
							</p>
						</div>
					</div>

					<p className={styles.featuresText}>
						Напишите почту для связи психолога с вами.
					</p>

					<label htmlFor="email">
						<input
							className={styles.input}
							type="email"
							name="email"
							id="email"
							value={formData.email}
							onChange={handleChange}
							required
							pattern={validator.isEmail(String(formData.email))}
							placeholder="example@mail.ru"
						/>
					</label>

					<div className={styles.nameInputBlock}>
						<label htmlFor="name">
							<input
								className={styles.input}
								type="text"
								name="name"
								id="name"
								value={formData.name}
								onChange={handleChange}
								required={!formData.disableName}
								disabled={formData.disableName}
								placeholder="Ваше имя"
							/>
						</label>

						<label htmlFor="disableName">
							<input
								className={styles.checkBox}
								type="checkbox"
								name="disableName"
								id="disableName"
								checked={formData.disableName}
								onChange={handleChange}
							/>
							Не готов(а) указывать имя
						</label>
					</div>

					<button className={styles.mainBtn} type="submit">
						Отправить заявку
					</button>
				</form>
			</div>
		</section>
	);
};

export default HowItWorksSection;
