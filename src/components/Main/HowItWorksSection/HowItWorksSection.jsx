import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './HowItWorksSection.module.scss';
import { submitHelpRequest } from '../../../slices/clientSlice/howItWorksAsyncActions';

const HowItWorksSection = () => {
	const [formData, setFormData] = useState({
		complaint: '',
		email: '',
		first_name: '',
	});

	const [errors, setErrors] = useState({
		email: '',
		first_name: '',
		complaint: '',
	});

	const [submitting, setSubmitting] = useState(false);
	const [submitError, setSubmitError] = useState(null);
	const [submitSuccess, setSubmitSuccess] = useState(false);

	const [emailChanged, setEmailChanged] = useState(false);
	const [firstNameChanged, setFirstNameChanged] = useState(false);
	const [complaintChanged, setComplaintChanged] = useState(false);

	const validateField = (name, value) => {
		if (name === 'email') {
			if (value.trim() === '') {
				return 'Пожалуйста, заполните поле';
			}
			if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(value)) {
				return 'Введите корректный email';
			}
		} else if (name === 'first_name') {
			if (
				value.trim() === '' ||
				!/^[а-яА-ЯёЁ]+(?:[-\s][а-яА-ЯёЁ]+)*$/.test(value)
			) {
				return value.trim() === '' ||
					/^[а-яА-ЯёЁ]+(?:[-\s][а-яА-ЯёЁ]+)*$/.test(value)
					? ''
					: 'Укажите имя как в паспорте';
			}
		} else if (name === 'complaint') {
			if (value.trim() === '') {
				return 'Пожалуйста, заполните поле';
			}
			if (value.length > 500) {
				return 'Превышено максимальное количество символов (500)';
			}
		}
		return '';
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));

		if (name === 'email') setEmailChanged(true);
		else if (name === 'first_name') setFirstNameChanged(true);
		else if (name === 'complaint') setComplaintChanged(true);
	};

	useEffect(() => {
		if (emailChanged) {
			const emailError = validateField('email', formData.email);
			setErrors((prevErrors) => ({ ...prevErrors, email: emailError }));
			setEmailChanged(false);
		}
	}, [formData.email, emailChanged]);

	useEffect(() => {
		if (firstNameChanged) {
			const firstNameError = validateField(
				'first_name',
				formData.first_name
			);
			setErrors((prevErrors) => ({
				...prevErrors,
				first_name: firstNameError,
			}));
			setFirstNameChanged(false);
		}
	}, [formData.first_name, firstNameChanged]);

	useEffect(() => {
		if (complaintChanged) {
			const complaintError = validateField(
				'complaint',
				formData.complaint
			);
			setErrors((prevErrors) => ({
				...prevErrors,
				complaint: complaintError,
			}));
			setComplaintChanged(false);
		}
	}, [formData.complaint, complaintChanged]);

	const dispatch = useDispatch();

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (errors.email || errors.first_name || errors.complaint) {
			return;
		}

		setSubmitting(true);

		try {
			await dispatch(submitHelpRequest(formData));
			setSubmitSuccess(true);
		} catch (error) {
			setSubmitError(
				error.message || 'Произошла ошибка при отправке заявки'
			);
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<section id="howItWorksSection" className={styles.howItWorksSection}>
			<h2 className={`${styles.mainSubHeader} ${styles.boldLeft}`}>
				Как это работает
			</h2>

			<div className={styles.featuresBlock}>
				<div className={styles.featuresElement}>
					<div
						className={`${styles.featuresIcon} ${styles.iconNote}`}
					/>
					<p className={styles.featuresText}>
						Оставляешь заявку на&nbsp;сайте
					</p>
				</div>

				<div className={styles.featuresElement}>
					<div
						className={`${styles.featuresIcon} ${styles.iconSync}`}
					/>
					<p className={styles.featuresText}>
						Психолог обрабатывает заявку
					</p>
				</div>

				<div className={styles.featuresElement}>
					<div
						className={`${styles.featuresIcon} ${styles.iconMessage}`}
					/>
					<p className={styles.featuresText}>
						Консультация в нашем онлайн-чате
					</p>
				</div>
			</div>

			<div className={styles.helpFormBlock}>
				<h2 className={styles.mainSubHeader}>Оставить заявку</h2>
				<p className={styles.helpFormText}>
					Вся информация, которую ты&nbsp;оставишь на&nbsp;сайте или
					обсудишь с&nbsp;психологом, конфиденциальна.
				</p>

				{submitSuccess ? (
					<p className={styles.successMessage}>
						Заявка успешно отправлена!
					</p>
				) : (
					<form className={styles.helpForm} onSubmit={handleSubmit}>
						<label htmlFor="email">
							<p className={styles.inputCaption}>Почта</p>
							<input
								className={`${styles.input} ${
									errors.email && styles.inputWrong
								}`}
								type="email"
								name="email"
								id="email"
								value={formData.email}
								onChange={handleChange}
								required
								// placeholder="example@mail.ru"
							/>
						</label>
						{errors.email && (
							<p className={styles.error}>{errors.email}</p>
						)}

						<label htmlFor="first_name">
							<p className={styles.inputCaption}>
								Имя (Можно не указывать)
							</p>
							<input
								className={`${styles.input} ${
									errors.first_name && styles.inputWrong
								}`}
								type="text"
								name="first_name"
								id="first_name"
								value={formData.first_name}
								onChange={handleChange}
								disabled={formData.disableName}
								// placeholder="Ваше имя"
							/>
						</label>
						{errors.first_name && (
							<p className={styles.error}>{errors.first_name}</p>
						)}

						<label htmlFor="complaint">
							<p className={styles.inputCaption}>Проблема</p>
							<textarea
								className={`${styles.textInput} ${
									errors.complaint && styles.inputWrong
								}`}
								id="complaint"
								name="complaint"
								value={formData.complaint}
								onChange={handleChange}
								required
								rows="10"
								// placeholder="Опишите кратко вашу проблему (максимум 500 символов)"
							/>
						</label>
						{errors.complaint && (
							<p className={styles.error}>{errors.complaint}</p>
						)}

						<button
							className={styles.mainBtn}
							type="submit"
							disabled={submitting}
						>
							{submitting ? 'Отправка...' : 'Отправить заявку'}
						</button>

						{submitError && (
							<p className={styles.errorMessage}>{submitError}</p>
						)}
					</form>
				)}
			</div>
		</section>
	);
};

export default HowItWorksSection;
