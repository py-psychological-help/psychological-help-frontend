import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import cls from './ForgotPasswordPage.module.scss';
import Button from '../../components/buttonRegister/Button';
import { requestPasswordChange } from '../../slices/authSlice/authAsyncActions';
import { clearMessage } from '../../slices/messageSlice';

export default function ForgotPassword() {
	const {
		register,
		handleSubmit,
		formState: { isValid, errors },
	} = useForm({ mode: 'onChange' });
	const dispatch = useDispatch();
	const { message } = useSelector((state) => state.message);

	function onSubmit(data) {
		dispatch(requestPasswordChange(data));
	}

	useEffect(() => {
		dispatch(clearMessage());
	}, [dispatch]);

	return (
		<div className={cls.container}>
			<h1 className={cls.header}>Восстановление пароля</h1>
			<p className={cls.caption}>
				Укажите свой e-mail, под которым вы зарегистрированы на сайте и
				на него будет отправлена информация о восстановлении пароля
			</p>
			<form
				className={cls.form}
				onSubmit={handleSubmit(onSubmit)}
				noValidate
			>
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
						// ужасный паттерн для почты по требованиям к продукту:
						pattern:
							/^(?!.*[._-]{2})[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:[-.][a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/,
						// более дружелюбный паттерн, который можно использовать
						// pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
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
				<span className={cls.apiError}>{message}</span>
				<div className={cls.button}>
					<Button
						type="submit"
						name="Восстановить пароль"
						isValid={isValid}
					/>
				</div>
			</form>
		</div>
	);
}
