import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import { useDispatch, useSelector } from 'react-redux';
import cls from './LoginPage.module.scss';
import Button from '../../components/buttonRegister/Button';
import { loginUser } from '../../slices/authSlice/authAsyncActions';

export default function LoginPage() {
	const {
		register,
		handleSubmit,
		// watch,
		formState: { isValid, errors },
	} = useForm();
	const [type, setType] = useState('password');
	const [icon, setIcon] = useState(eyeOff);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const isSuccess = useSelector((state) => state.auth.isSuccess);

	useEffect(() => {
		if (isSuccess) {
			navigate('/account');
		}
	}, [isSuccess, navigate]);

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
		dispatch(loginUser(data));
	}

	return (
		<div className={cls.container}>
			<h1 className={cls.header}>Авторизация</h1>
			<form
				className={cls.authForm}
				onSubmit={handleSubmit(onSubmit)}
				noValidate
			>
				<h3 className={cls.inputCaption}>Почта</h3>
				<input
					name="authEmail"
					id="authEmail"
					type="email"
					placeholder="Почта"
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
						placeholder="Пароль"
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
					<Button type="submit" name="Войти" />
				</div>
			</form>
			<Link to="/forgotpassword" className={cls.link}>
				Забыли пароль?
			</Link>
		</div>
	);
}
