import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import cls from './RegisterStep2Page.module.scss';
import Button from '../../components/button/Button';

const RegisterStep2Page = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);

	return (
		<div className={cls.step2}>
			<h1 className={cls.heading}>Регистрация шаг 2</h1>
			<p className={cls.description}>Краткое описание</p>

			<form
				onSubmit={handleSubmit(onSubmit)}
				className={cls.form}
				noValidate
			>
				{/* register your input into the hook by invoking the "register" function */}
				<input
					{...register('surname', { required: true })}
					placeholder="Фамилия"
					type="text"
				/>
				{errors.surname && <span>Это обязательное поле</span>}
				<input
					{...register('name', { required: true })}
					placeholder="Имя"
					type="text"
				/>
				{errors.name && <span>Это обязательное поле</span>}
				<input
					{...register('birth', { required: true })}
					placeholder="Дата рождения"
					type="date"
				/>
				{errors.birth && <span>Это обязательное поле</span>}
			</form>

			<ul className={cls.buttons}>
				<li>
					<Link to="/signup/step_1">
						<Button name="Назад" />
					</Link>
				</li>
				<li>
					<Link to="/signup/step_3">
						<Button name="Далее" type="submit" />
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default RegisterStep2Page;
