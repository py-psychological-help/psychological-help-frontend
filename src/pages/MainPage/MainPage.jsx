import { useSelector } from 'react-redux';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import cls from './MainPage.module.scss';

const MainPage = () => {
	// Проверка стора
	const user = useSelector((state) => state.user);

	return (
		<div>
			<Header>Header</Header>
			<h1>Главная</h1>
			<p>Привет, {`${user.name} ${user.surname}`}</p>
			<Footer>Footer</Footer>
		</div>
	);
};

export default MainPage;
