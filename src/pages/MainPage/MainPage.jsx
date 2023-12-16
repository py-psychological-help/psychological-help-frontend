import { useSelector } from 'react-redux';
import cls from './MainPage.module.scss';

const MainPage = () => {
	// Проверка стора
	const user = useSelector((state) => state.user);

	return (
		<div>
			<h1>Главная</h1>
			<p>Привет, {`${user.name} ${user.surname}`}</p>
		</div>
	);
};

export default MainPage;
