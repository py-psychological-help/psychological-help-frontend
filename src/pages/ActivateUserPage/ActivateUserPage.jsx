import { useState, useEffect, memo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import cls from './ActivateUserPage.module.scss';
import { activateUser } from '../../slices/authSlice/authAsyncActions';
import { clearMessage } from '../../slices/messageSlice';
import Button from '../../components/buttonRegister/Button';

const ActivateUserPage = memo(() => {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false);
	const { message } = useSelector((state) => state.message);
	const { uid, token } = useParams();
	const isValid = true;

	useEffect(() => {
		const sendData = async () => {
			setIsLoading(true);
			const data = { uid, token };
			await dispatch(activateUser(data));
			setIsLoading(false);
		};
		sendData();
	}, [dispatch, uid, token]);

	useEffect(() => {
		dispatch(clearMessage());
	}, [dispatch]);

	// return isLoading ? (
	// 	<p>loader</p>
	// ) : message !== null ? (
	// 	<div className={cls.container}>
	// 		<p className={cls.paragraph}>{message}</p>
	// 	</div>
	// ) : (
	// 	<div className={cls.container}>
	// 		<h1 className={cls.header}>Ваш аккаунт активирован. Спасибо!</h1>
	// 		<p className={cls.paragraph}>
	// 			Перейдите в личный кабинет для продолжения работы.
	// 		</p>

	// 		<Link to="/signin" className={cls.link}>
	// 			Войти в личный кабинет
	// 		</Link>
	// 	</div>
	// );

	return (
		<div className={cls.container}>
			<h1 className={cls.header}>Ваш аккаунт активирован. Спасибо!</h1>
			<p className={cls.paragraph}>
				Перейдите в личный кабинет для продолжения работы.
			</p>

			<Link to="/signin" className={cls.link}>
				<Button
					type="button"
					name="Войти в личный кабинет"
					isValid={isValid}
				/>
			</Link>
		</div>
	);
});

export default ActivateUserPage;
