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
import { clearMessage } from '../../slices/messageSlice';

export default function LoginPage() {
	const {
		register,
		handleSubmit,
		formState: { isValid, errors },
	} = useForm({ mode: 'onChange' });
	const [type, setType] = useState('text');
	const [icon, setIcon] = useState(eye);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	// const userData = useSelector((state) => state.user.userData);
	const { isSuccess, authToken } = useSelector((state) => state.auth);
	const { message } = useSelector((state) => state.message);

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
		if (isSuccess && authToken) navigate('/account-chat');
	}, [navigate, dispatch, isSuccess, authToken]);

	function onSubmit(data) {
		dispatch(loginUser(data));
	}

	useEffect(() => {
		dispatch(clearMessage());
	}, [dispatch]);

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
						minLength: 6,
						maxLength: 50,
						pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
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
								/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-])$/,
						})}
					/>
					<button
						type="button"
						className={
							errors?.password
								? `${cls.eyeBtn} ${cls.eyeBtnWrong}`
								: cls.eyeBtn
						}
						onClick={handlePasswordToggle}
					>
						<Icon class={cls.eyePicture} icon={icon} size={25} />
					</button>

					{errors?.password?.type === 'pattern' && (
						<p className={cls.error}>
							Не соответствует требованиям к паролю
						</p>
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
					<Button type="submit" name="Войти" isValid={isValid} />
				</div>
			</form>
			<Link to="/forgotpassword" className={cls.link}>
				Забыли пароль?
			</Link>
		</div>
	);
}
