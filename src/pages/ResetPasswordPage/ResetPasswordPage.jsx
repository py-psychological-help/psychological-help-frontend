import { memo, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import cls from './ResetPasswordPage.module.scss';
import Button from '../../components/buttonRegister/Button';
import passwordValidation from '../../utils/passwordValidation';
import { resetPasswordChange } from '../../slices/authSlice/authAsyncActions';
import { clearMessage } from '../../slices/messageSlice';

const ResetPasswordPage = memo(() => {
	const {
		register,
		handleSubmit,
		formState: { isValid, errors },
	} = useForm({ mode: 'onChange' });
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const isSuccess = useSelector((state) => state.auth.isSuccess);
	const { message } = useSelector((state) => state.message);
	const { uid, token } = useParams();

	function onSubmit(data) {
		const fullData = { uid, token, ...data };
		dispatch(resetPasswordChange(fullData));
	}

	console.log(message);

	useEffect(() => {
		if (isSuccess) navigate('/signin');
	}, [navigate, dispatch, isSuccess]);

	useEffect(() => {
		dispatch(clearMessage());
	}, [dispatch]);

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

				<span className={cls.apiError}>{message}</span>
				<div className={cls.button}>
					<Button type="submit" name="Войти" isValid={isValid} />
				</div>
			</form>
		</div>
	);
});

export default ResetPasswordPage;
