import { Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import AccountPage from '../../pages/AccountPage/AccountPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import MainPage from '../../pages/MainPage/MainPage';
import RegisterPage from '../../pages/RegisterPage/RegisterPage';
import AboutProjectPage from '../../pages/AboutProjectPage/AboutProjectPage';
import AboutHelpPage from '../../pages/AboutHelpPage/AboutHelpPage';
import HowItWorksPage from '../../pages/HowItWorksPage/HowItWorksPage';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


const App = () => {

	const [isLoggedIn, setIsLoggedIn] = useState(true);

	return (
		<>
			<Header
				isLoggedIn={isLoggedIn}
			/>
			<Routes>
				<Route element={
					<MainPage/>}
					path="/"
				/>
				<Route element={<AboutProjectPage />} path="about" />
				<Route element={<AboutHelpPage />} path="about-help" />
				<Route element={<HowItWorksPage />} path="how-it-works" />
				<Route element={<AccountPage />} path="account" />
				<Route element={<LoginPage />} path="signin" />
				<Route element={<RegisterPage />} path="signup" />
			</Routes>
			<Footer />
		</>
	);
};

export default App;
