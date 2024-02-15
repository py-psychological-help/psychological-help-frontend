import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import cls from './ActivateUserPage.module.scss';
import { activateUser } from '../../slices/authSlice/authAsyncActions';
import { clearMessage } from '../../slices/messageSlice';

export default function ActivateUserPage() {
	const dispatch = useDispatch();
	const { message } = useSelector((state) => state.message);
	const { uid, token } = useParams();
	console.log(message);

	useEffect(() => {
		const data = { uid, token };
		dispatch(activateUser(data));
	}, [dispatch, uid, token]);

	useEffect(() => {
		dispatch(clearMessage());
	}, [dispatch]);

	return message === undefined ? (
		<div className={cls.container}>
			<p className={cls.paragraph}>Спасибо! Активация прошла успешно</p>

			<Link to="/signin" className={cls.link}>
				Войти
			</Link>
		</div>
	) : (
		<div className={cls.container}>
			<p className={cls.paragraph}>{message}</p>
		</div>
	);
}
