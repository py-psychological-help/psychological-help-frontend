import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import cls from './RegisterPage.module.scss';
import Button from '../../components/buttonRegister/Button';

export default function RegisterPage() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const [type, setType] = useState('password');
	const [icon, setIcon] = useState(eyeOff);

	function handlePasswordToggle() {
		if (type === 'password') {
			setIcon(eye);
			setType('text');
		} else {
			setIcon(eyeOff);
			setType('password');
		}
	}

	function onSubmit(data) {
		console.log(data);
	}

	return (
		<div className={cls.container}>
			<h1 className={cls.header}>Регистрация</h1>
			<p className={cls.caption}>
				Регистрация психолога необходима для того, чтобы иметь
				возможность работать и помогать людям. После регистрации,
				психолог получает доступ к платформе, где он может вести
				консультации и проводить терапевтические сессии онлайн.
			</p>

			<form
				className={cls.form}
				onSubmit={handleSubmit(onSubmit)}
				noValidate
			>
				<h3 className={cls.inputCaption}>Фамилия</h3>
				<input
					name="surame"
					id="surname"
					type="text"
					placeholder="Иванов"
					className={
						errors?.surname
							? `${cls.input} ${cls.inputWrong}`
							: cls.input
					}
					{...register('surname', {
						required: true,
						minLength: 1,
						maxLength: 50,
						pattern: /^[А-ЯЁ][а-яё][-][\s]*$/,
					})}
				/>
				{errors?.surname?.type === 'pattern' && (
					<p className={cls.error}>
						Не соответствует формату фамилии
					</p>
				)}
				{errors?.surname?.type === 'required' && (
					<p className={cls.error}>Пожалуйста, заполните поле</p>
				)}
				{errors?.surname?.type === 'minLength' && (
					<p className={cls.error}>Слишком мало символов</p>
				)}
				{errors?.surname?.type === 'maxLength' && (
					<p className={cls.error}>Слишком много символов</p>
				)}

				<h3 className={cls.inputCaption}>Имя</h3>
				<input
					name="name"
					id="name"
					type="text"
					placeholder="Владислав"
					className={
						errors?.name
							? `${cls.input} ${cls.inputWrong}`
							: cls.input
					}
					{...register('name', {
						required: true,
						minLength: 1,
						maxLength: 50,
						pattern: /^[А-ЯЁ][а-яё][-][\s]*$/,
					})}
				/>
				{errors?.name?.type === 'pattern' && (
					<p className={cls.error}>Не соответствует формату имени</p>
				)}
				{errors?.name?.type === 'required' && (
					<p className={cls.error}>Пожалуйста, заполните поле</p>
				)}
				{errors?.name?.type === 'minLength' && (
					<p className={cls.error}>Слишком мало символов</p>
				)}
				{errors?.name?.type === 'maxLength' && (
					<p className={cls.error}>Слишком много символов</p>
				)}

				<h3 className={cls.inputCaption}>Дата рождения</h3>
				<input
					name="birthdate"
					id="birthdate"
					type="date"
					className={
						errors?.birthdate
							? `${cls.input} ${cls.inputWrong}`
							: cls.input
					}
					{...register('birthdate', {
						required: true,
					})}
				/>

				{errors?.birthdate?.type === 'required' && (
					<p className={cls.error}>Пожалуйста, заполните поле</p>
				)}

				<h3 className={cls.inputCaption}>Почта</h3>
				<input
					name="authEmail"
					id="authEmail"
					type="email"
					placeholder="почта"
					className={
						errors?.email
							? `${cls.input} ${cls.inputWrong}`
							: cls.input
					}
					{...register('email', {
						required: true,
						minLength: 7,
						maxLength: 50,
						pattern: /[^@\s]+@[^@\s]+\.[^@\s]+/,
					})}
				/>
				{errors?.email?.type === 'pattern' && (
					<p className={cls.error}>Не соответствует формату почты</p>
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

				<h3 className={cls.inputCaption}>Пароль</h3>
				<div className={cls.passwordContainer}>
					<input
						name="authPassword"
						id="authPassword"
						type={type}
						placeholder="пароль"
						className={
							errors?.password
								? `${cls.input} ${cls.inputWrong}`
								: cls.input
						}
						{...register('password', {
							required: true,
							minLength: 8,
							maxLength: 20,
							pattern:
								/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-])/,
						})}
					/>
					<button
						className={cls.eyeBtn}
						onClick={handlePasswordToggle}
					>
						<Icon class={cls.eyePicture} icon={icon} size={25} />
					</button>

					{errors?.password?.type === 'pattern' && (
						<p className={cls.error}>Запрещенные символы.</p>
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
				</div>
				{errors?.password === undefined && (
					<span className={cls.passwordSpan}>
						Пароль должен содержать заглавные и строчные буквы,
						цифры и специальные символы.
					</span>
				)}
				<div className={cls.button}>
					<Button type="submit" name="Регистрация" />
				</div>
			</form>
		</div>
	);
}
