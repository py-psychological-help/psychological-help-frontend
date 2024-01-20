import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import cls from './RegisterPage.module.scss';
import Button from '../../components/buttonRegister/Button';
import { registerUser } from '../../slices/authSlice/authAsyncActions';
import { clearMessage } from '../../slices/messageSlice';

export default function RegisterPage() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { isValid, errors },
	} = useForm({ mode: 'onChange' });
	const [type, setType] = useState('password');
	const [icon, setIcon] = useState(eyeOff);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const isSuccess = useSelector((state) => state.auth.isSuccess);
	const { message } = useSelector((state) => state.message);

	const date = new Date();
	date.setFullYear(date.getFullYear() - 18);
	const maxDate = date.toISOString().slice(0, 10);

	const passwordValidation = (password) => {
		const cyrrillicRegExp = /(?=.*?[А-ЯЁа-яё])/;
		const uppercaseRegExp = /(?=.*?[A-Z])/;
		const lowercaseRegExp = /(?=.*?[a-z])/;
		const digitsRegExp = /(?=.*?[0-9])/;
		const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;

		const cyrrillicPassword = cyrrillicRegExp.test(password);
		const uppercasePassword = uppercaseRegExp.test(password);
		const lowercasePassword = lowercaseRegExp.test(password);
		const digitsPassword = digitsRegExp.test(password);
		const specialCharPassword = specialCharRegExp.test(password);

		let errMsg = null;
		if (cyrrillicPassword) {
			errMsg = 'Только символы латиницы';
		} else if (!uppercasePassword) {
			errMsg = 'Пароль должен содержать заглавную букву';
		} else if (!lowercasePassword) {
			errMsg = 'Пароль должен содержать строчную букву';
		} else if (!digitsPassword) {
			errMsg = 'Пароль должен содержать цифру';
		} else if (!specialCharPassword) {
			errMsg = 'Пароль должен содержать специальный символ';
		} else {
			errMsg = null;
		}

		return errMsg;
	};

	function handlePasswordToggle() {
		if (type === 'password') {
			setIcon(eye);
			setType('text');
		} else {
			setIcon(eyeOff);
			setType('password');
		}
	}

	useEffect(() => {
		if (isSuccess) navigate('/signin');
	}, [navigate, dispatch, isSuccess]);

	function onSubmit(data) {
		dispatch(registerUser(data));
	}

	useEffect(() => {
		dispatch(clearMessage());
	}, [dispatch]);

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
					name="lastName"
					id="lastName"
					type="text"
					placeholder="Иванов"
					className={
						errors?.lastName
							? `${cls.input} ${cls.inputWrong}`
							: cls.input
					}
					{...register('lastName', {
						required: true,
						minLength: 1,
						maxLength: 50,
						pattern: /^[а-яА-ЯёЁ\-\s]+$/,
					})}
				/>
				{errors?.lastName?.type === 'pattern' && (
					<p className={cls.error}>Только символы кириллицы</p>
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

				<h3 className={cls.inputCaption}>Имя</h3>
				<input
					name="firstName"
					id="firstName"
					type="text"
					placeholder="Владислав"
					className={
						errors?.firstName
							? `${cls.input} ${cls.inputWrong}`
							: cls.input
					}
					{...register('firstName', {
						required: true,
						minLength: 1,
						maxLength: 50,
						pattern: /^[а-яА-ЯёЁ\-\s]+$/,
					})}
				/>
				{errors?.firstName?.type === 'pattern' && (
					<p className={cls.error}>Только символы кириллицы</p>
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

				<h3 className={cls.inputCaption}>Дата рождения</h3>
				<input
					name="birthDate"
					id="birthDate"
					type="date"
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
					<p className={cls.error}>Вам должно быть более 18 лет</p>
				)}

				<h3 className={cls.inputCaption}>Почта</h3>
				<input
					name="email"
					id="email"
					type="email"
					placeholder="example@gmail.com"
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
						name="password"
						id="password"
						type={type}
						placeholder="Jkl12nY*"
						className={
							errors?.password && errors?.password.message
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
					<button
						type="button"
						className={
							errors?.password && errors?.password.message
								? `${cls.eyeBtn} ${cls.eyeBtnWrong}`
								: cls.eyeBtn
						}
						onClick={handlePasswordToggle}
					>
						<Icon class={cls.eyePicture} icon={icon} size={25} />
					</button>

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
				</div>
				{errors?.password === undefined && (
					<span className={cls.passwordSpan}>
						Пароль должен содержать заглавные и строчные буквы,
						цифры и специальные символы.
					</span>
				)}
				<span className={cls.apiError}>{message}</span>
				<div className={cls.button}>
					<Button type="submit" name="Регистрация" />
				</div>
			</form>
		</div>
	);
}
