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
import RegisterStep1Page from '../../pages/RegisterStep1Page/RegisterStep1Page';
import RegisterStep2Page from '../../pages/RegisterStep2Page/RegisterStep2Page';
import RegisterStep3Page from '../../pages/RegisterStep3Page/RegisterStep3Page';
import cls from './App.module.scss';

const App = () => {
	return (
		<div className={cls.app}>
			<Header />
			<main className={cls.main}>
				<Routes>
					<Route element={<MainPage />} path="/" />
					<Route element={<AboutProjectPage />} path="/about" />
					<Route element={<AboutHelpPage />} path="/about-help" />
					<Route element={<HowItWorksPage />} path="/how-it-works" />
					<Route element={<AccountPage />} path="/account" />
					<Route element={<LoginPage />} path="/signin" />
					<Route path="signup/">
						<Route element={<RegisterPage />} index />
						<Route element={<RegisterStep1Page />} path="step_1" />
						<Route element={<RegisterStep2Page />} path="step_2" />
						<Route element={<RegisterStep3Page />} path="step_3" />
					</Route>
				</Routes>
			</main>
			<Footer />
		</div>
	);
};

export default App;
