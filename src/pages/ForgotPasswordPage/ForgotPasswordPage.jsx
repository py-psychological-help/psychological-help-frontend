import { useForm } from 'react-hook-form';
import cls from './ForgotPasswordPage.module.scss';
import Button from '../../components/button/Button';

export default function ForgotPassword() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	function onSubmit(data) {
		console.log(data);
	}

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
				<div className={cls.button}>
					<Button type="submit" name="Восстановить пароль" />
				</div>
			</form>
		</div>
	);
}
