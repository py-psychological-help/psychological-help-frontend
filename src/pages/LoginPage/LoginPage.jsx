import {useForm} from 'react-hook-form';
import {Link} from 'react-router-dom';
import cls from './LoginPage.module.scss';

export default function LoginPage() {
	const {
		register,
		handleSubmit,
		// watch,
		formState: {isValid, errors},
	} = useForm();

	function onSubmit(data) {
		console.log(data);
	}

	return (
		<>
			<h1>Авторизация</h1>
			<p>Краткое описание</p>
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
					placeholder="почта"
					className={cls.inputTypeMail}
					{...register('email', {
						required: true,
						minLength: 7,
						maxLength: 50,
						pattern: /[^@\s]+@[^@\s]+\.[^@\s]+/,
					})}
				/>
				{errors?.email?.type === 'pattern' && (
					<p>Не соответствует формату почты</p>
				)}
				{errors?.email?.type === 'required' && (
					<p>Необходимо заполнить поле</p>
				)}
				{errors?.email?.type === 'minLength' && (
					<p>Слишком короткое значение</p>
				)}
				{errors?.email?.type === 'maxLength' && (
					<p>Слишком длинное значение</p>
				)}

				<h3 className={cls.inputCaption}>Пароль</h3>

				<input
					name="authPassword"
					id="authPassword"
					type="password"
					placeholder="пароль"
					className={cls.inputTypePassword}
					{...register('password', {
						required: true,
						minLength: 8,
						maxLength: 20,
						pattern:
							/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-])/,
					})}
				/>
				{errors?.password?.type === 'pattern' && (
					<p>Не соответствует формату пароля</p>
				)}
				{errors?.password?.type === 'minLength' && (
					<p>Слишком короткое значение</p>
				)}
				{errors?.password?.type === 'maxLength' && (
					<p>Слишком длинное значение</p>
				)}
				{errors?.password?.type === 'required' && (
					<p>Необходимо заполнить поле</p>
				)}

				<button
					className={cls.submitBtn}
					type="submit"
					disabled={!isValid}
				>
					Войти
				</button>
			</form>
			<div className={cls.caption}>
				<p className={cls.captionText}>Нет аккаунта?</p>
				<Link to="/signup" className={cls.captionLink}>
					Зарегистрироваться
				</Link>
			</div>
		</>
	);
}
