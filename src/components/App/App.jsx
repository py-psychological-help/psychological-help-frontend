import { Route, Routes } from 'react-router-dom';
import AccountPage from '../../pages/AccountPage/AccountPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import MainPage from '../../pages/MainPage/MainPage';
import RegisterPage from '../../pages/RegisterPage/RegisterPage';
import AboutProjectPage from '../../pages/AboutProjectPage/AboutProjectPage';
import AboutHelpPage from '../../pages/AboutHelpPage/AboutHelpPage';
import HowItWorksPage from '../../pages/HowItWorksPage/HowItWorksPage';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Principles from '../Principles/Principles';

const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route element={<MainPage />} path="/" />
				<Route element={<AboutProjectPage />} path="about" />
				<Route element={<AboutHelpPage />} path="about-help" />
				<Route element={<HowItWorksPage />} path="how-it-works" />
				<Route element={<AccountPage />} path="account" />
				<Route element={<LoginPage />} path="signin" />
				<Route element={<RegisterPage />} path="signup" />
				<Route element={<Principles />} path="signup" />
			</Routes>
			<Footer />
		</>
	);
};

export default App;
