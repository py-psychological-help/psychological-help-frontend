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
import Principles from '../../pages/AccountPage/Principles/Principles';
import Chats from '../../pages/AccountPage/Chats/Chats';

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
				<Route element={<Principles />} path="principles" />
				<Route element={<Chats />} path="chats" />
			</Routes>
			<Footer />
		</>
	);
};

export default App;
