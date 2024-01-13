import {Route, Routes} from 'react-router-dom';
import React, {useState} from 'react';
import cls from './App.module.scss'
import AccountPage from '../../pages/AccountPage/AccountPage';
import AccountChatPage from "../../pages/AccountChatPage/AccountChatPage";
import AccountPrinciples from "../../pages/AccountPrinciples/AccountPrinciples";
import LoginPage from '../../pages/LoginPage/LoginPage';
import MainPage from '../../pages/MainPage/MainPage';
import RegisterPage from '../../pages/RegisterPage/RegisterPage';
import AboutProjectPage from '../../pages/AboutProjectPage/AboutProjectPage';
import AboutHelpPage from '../../pages/AboutHelpPage/AboutHelpPage';
import HowItWorksPage from '../../pages/HowItWorksPage/HowItWorksPage';
import WelcomePage from '../../pages/WelcomePage/WelcomePage';
// import ForgotPasswordPage from '../../pages/ForgotPasswordPage/ForgotPasswordPage';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AccountDocumentsPage from "../../pages/AccountDocumentsPage/AccountDocumentsPage";

const App = () => {

	const [isLoggedIn, setIsLoggedIn] = useState(true);

	return (
		<div className={cls.app}>
			<Header
				isLoggedIn={isLoggedIn} />

			<main className={cls.main}>
				<Routes>
					<Route element={<MainPage />} path="/" />
					<Route element={<AboutProjectPage />} path="/about" />
					<Route element={<AboutHelpPage />} path="/about-help" />
					<Route element={<HowItWorksPage />} path="/how-it-works" />
					<Route element={<AccountPage />} path="account" />
					<Route element={<AccountDocumentsPage />} path="/account/documents" />
					<Route element={<AccountChatPage />} path="account-chat" />
					<Route element={<AccountPrinciples />} path="account-principles" />
					<Route element={<WelcomePage />} path="/welcome" />
					<Route element={<LoginPage />} path="/signin" />
					<Route element={<RegisterPage />} path="/signup" />
					{/* <Route
						element={<ForgotPasswordPage />}
						path="/forgotpassword" /> */}
			</Routes>
		</main>
		<Footer />
		</div>

	);
};

export default App;

