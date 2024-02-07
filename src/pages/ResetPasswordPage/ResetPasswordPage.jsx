import { useForm } from 'react-hook-form';
import cls from './ResetPasswordPage.module.scss';
import Button from '../../components/buttonRegister/Button';
import passwordValidation from '../../utils/passwordValidation';

export default function ResetPasswordPage() {
	const {
		register,
		handleSubmit,
		formState: { isValid, errors },
	} = useForm();

	function onSubmit(data) {
		console.log(data);
	}

	return (
		<div className={cls.container}>
			<h1 className={cls.header}>Введите новый пароль</h1>

			<form
				className={cls.form}
				onSubmit={handleSubmit(onSubmit)}
				noValidate
			>
				<h3 className={cls.inputCaption}>
					Пароль (заглавные и строчные буквы, цифры и символы)
				</h3>
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
					<Button type="submit" name="Войти" isValid={isValid} />
				</div>
			</form>
		</div>
	);
}
