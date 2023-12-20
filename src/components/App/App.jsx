import { Route, Routes } from 'react-router-dom';
import AccountPage from '../../pages/AccountPage/AccountPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import MainPage from '../../pages/MainPage/MainPage';
import RegisterPage from '../../pages/RegisterPage/RegisterPage';
import AboutProjectPage from '../../pages/AboutProjectPage/AboutProjectPage';
import AboutHelpPage from '../../pages/AboutHelpPage/AboutHelpPage';
import HowItWorksPage from '../../pages/HowItWorksPage/HowItWorksPage';
import VerificationPage from '../../pages/VerificationPage/VerificationPage';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

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
				<Route element={<VerificationPage />} path="verification" />
			</Routes>
			<Footer />
		</>
	);
};

export default App;
