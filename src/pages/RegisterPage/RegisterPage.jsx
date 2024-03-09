import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import cls from './RegisterPage.module.scss';
import Button from '../../components/buttonRegister/Button';
import { registerUser } from '../../slices/authSlice/authAsyncActions';
import { clearMessage } from '../../slices/messageSlice';
import passwordValidation from '../../utils/passwordValidation';

export default function RegisterPage() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { isValid, errors },
	} = useForm({ mode: 'onChange' });
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { isSuccess } = useSelector((state) => state.auth);
	const { message } = useSelector((state) => state.message);
	const [type, setType] = useState('text');

	const date = new Date();
	date.setFullYear(date.getFullYear() - 18);
	const maxDate = date.toISOString().slice(0, 10);

	useEffect(() => {
		if (isSuccess) navigate('/success-register');
	}, [navigate, dispatch, isSuccess]);

	function onSubmit(data) {
		dispatch(registerUser(data));
	}

	useEffect(() => {
		dispatch(clearMessage());
	}, [dispatch]);

	function changeDateInput() {
		if (type === 'text') {
			setType('date');
		} else if (watch('birthDate') === undefined && type === 'date') {
			setType('text');
		}
	}

	return (
		<div className={cls.container}>
			<h1 className={cls.header}>Регистрация</h1>
			<p className={cls.caption}>
				Регистрация психолога необходима для того, чтобы иметь
				возможность работать и помогать людям.
				<br /> После регистрации, психолог получает доступ к платформе,{' '}
				<br />
				где он может вести консультации и проводить терапевтические
				сессии онлайн.
			</p>

			<form
				className={cls.form}
				onSubmit={handleSubmit(onSubmit)}
				noValidate
			>
				<label className={cls.label} htmlFor="lastName">
					<h3 className={cls.inputCaption}>Фамилия</h3>
					<input
						name="lastName"
						id="lastName"
						className={
							errors?.lastName
								? `${cls.input} ${cls.inputWrong}`
								: cls.input
						}
						{...register('lastName', {
							required: true,
							minLength: 1,
							maxLength: 50,
							pattern: /^[а-яА-ЯёЁ]+(?:[-\s][а-яА-ЯёЁ]+)*$/,
						})}
					/>
					{errors?.lastName?.type === 'pattern' && (
						<p className={cls.error}>
							Укажите фамилию как в паспорте
						</p>
					)}
					{errors?.lastName?.type === 'required' && (
						<p className={cls.error}>Пожалуйста, заполните поле</p>
					)}
					{errors?.lastName?.type === 'minLength' && (
						<p className={cls.error}>Слишком мало символов</p>
					)}
					{errors?.lastName?.type === 'maxLength' && (
						<p className={cls.error}>Слишком много символов</p>
					)}
				</label>

				<label className={cls.label} htmlFor="firstName">
					<h3 className={cls.inputCaption}>Имя</h3>
					<input
						name="firstName"
						id="firstName"
						className={
							errors?.firstName
								? `${cls.input} ${cls.inputWrong}`
								: cls.input
						}
						{...register('firstName', {
							required: true,
							minLength: 1,
							maxLength: 50,
							pattern: /^[а-яА-ЯёЁ]+(?:[-\s][а-яА-ЯёЁ]+)*$/,
						})}
					/>
					{errors?.firstName?.type === 'pattern' && (
						<p className={cls.error}>Укажите имя как в паспорте</p>
					)}
					{errors?.firstName?.type === 'required' && (
						<p className={cls.error}>Пожалуйста, заполните поле</p>
					)}
					{errors?.firstName?.type === 'minLength' && (
						<p className={cls.error}>Слишком мало символов</p>
					)}
					{errors?.firstName?.type === 'maxLength' && (
						<p className={cls.error}>Слишком много символов</p>
					)}
				</label>

				<label className={cls.label} htmlFor="birthDate">
					<h3 className={cls.inputCaption}>Дата рождения</h3>
					<input
						name="birthDate"
						id="birthDate"
						type={type}
						onFocus={changeDateInput}
						className={
							errors?.birthDate
								? `${cls.input} ${cls.inputWrong}`
								: cls.input
						}
						{...register('birthDate', {
							required: true,
							min: '1930-01-01',
							max: maxDate,
						})}
					/>

					{errors?.birthDate?.type === 'required' && (
						<p className={cls.error}>Пожалуйста, заполните поле</p>
					)}

					{errors?.birthDate?.type === 'min' && (
						<p className={cls.error}>Некорректная дата</p>
					)}

					{errors?.birthDate?.type === 'max' && (
						<p className={cls.error}>
							Вам должно быть более 18 лет
						</p>
					)}
				</label>

				<label className={cls.label} htmlFor="email">
					<h3 className={cls.inputCaption}>Почта</h3>
					<input
						name="email"
						id="email"
						className={
							errors?.email
								? `${cls.input} ${cls.inputWrong}`
								: cls.input
						}
						{...register('email', {
							required: true,
							minLength: 6,
							maxLength: 50,
							// ужасный паттерн для почты по требованиям к продукту
							pattern:
								/^(?!.*[._-]{2})[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:[-.][a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/,
							// более дружелюбный паттерн, который можно использовать
							// pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
						})}
					/>
					{errors?.email?.type === 'pattern' && (
						<p className={cls.error}>
							Не соответствует формату почты
						</p>
					)}
					{errors?.email?.type === 'required' && (
						<p className={cls.error}>Пожалуйста, заполните поле</p>
					)}
					{errors?.email?.type === 'minLength' && (
						<p className={cls.error}>Слишком мало символов</p>
					)}
					{errors?.email?.type === 'maxLength' && (
						<p className={cls.error}>Слишком много символов</p>
					)}
				</label>

				<label className={cls.label} htmlFor="password">
					<h3 className={cls.inputCaption}>Пароль</h3>
					<input
						name="password"
						id="password"
						type="text"
						className={
							errors?.password
								? `${cls.input} ${cls.inputWrong}`
								: cls.input
						}
						{...register('password', {
							required: true,
							minLength: 8,
							maxLength: 20,
							validate: passwordValidation,
						})}
					/>

					{errors?.password?.type === 'validate' && (
						<p className={cls.error}>{errors.password.message}</p>
					)}
					{errors?.password?.type === 'minLength' && (
						<p className={cls.error}>Слишком мало символов</p>
					)}
					{errors?.password?.type === 'maxLength' && (
						<p className={cls.error}>Слишком много символов</p>
					)}
					{errors?.password?.type === 'required' && (
						<p className={cls.error}>Пожалуйста, заполните поле</p>
					)}
				</label>

				<span className={cls.apiError}>{message}</span>
				<div className={cls.button}>
					<Button
						type="submit"
						name="Регистрация"
						isValid={isValid}
					/>
				</div>
			</form>
		</div>
	);
}
