import { Route, Routes, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cls from './App.module.scss';
import AccountPage from '../../pages/AccountPage/AccountPage';
import AccountChatPage from '../../pages/AccountChatPage/AccountChatPage';
import AccountPrinciples from '../../pages/AccountPrinciples/AccountPrinciples';
import LoginPage from '../../pages/LoginPage/LoginPage';
import MainPage from '../../pages/MainPage/MainPage';
import RegisterPage from '../../pages/RegisterPage/RegisterPage';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AccountDocumentsPage from '../../pages/AccountDocumentsPage/AccountDocumentsPage';
import PsychologistSide from '../PsychologistSide/PsychologistSide';
import ClientSide from '../ClientSide/ClientSide';
import WelcomePage from '../../pages/WelcomePage/WelcomePage';
import { getCurrentUser } from '../../slices/userSlice/userAsyncActions';
import ForgotPassword from '../../pages/ForgotPasswordPage/ForgotPasswordPage';

const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const userData = useSelector((state) => state.user.userData);
	const authToken = useSelector((state) => state.auth.authToken);
	const userIsTrue = useSelector((state) => state.user.userData);

	// Получения даты юзера по токену, с помощью useSelector эти данные можно юзать во всё приложении
	// Добавить проверки на налиие токена и т.п.
	useEffect(() => {
		// создаёт перерендеры при каждой смене роута, позже пофиксить
		if (authToken) {
			dispatch(getCurrentUser());
		}
	}, [dispatch, authToken]);

	useEffect(() => {
		if (userData) navigate('/account');
		// eslint-disable-next-line
	}, [userData]); // Ругается на отсутствие navigate

	const [selectedChat, setSelectedChat] = useState();

	const handleChatSelection = (chat) => {
		setSelectedChat(chat);
	};

	return (
		<div className={cls.app}>
			<Header isLoggedIn={isLoggedIn} />

			<main className={cls.main}>
				<Routes>
					<Route element={<MainPage />} path="/" />
					<Route element={<WelcomePage />} path="/welcome" />
					<Route element={<ClientSide />} path="client-side" />
					<Route element={<LoginPage />} path="/signin" />
					<Route path="signup/" element={<RegisterPage />} />
					<Route
						element={<ForgotPassword />}
						path="/forgotpassword"
					/>

					{userIsTrue ? (
						<>
							<Route element={<AccountPage />} path="account" />
							<Route
								element={<AccountDocumentsPage />}
								path="/account/documents"
							/>
							<Route
								element={
									<AccountChatPage
										onSelect={handleChatSelection}
									/>
								}
								path="account-chat"
							/>
							<Route
								element={<AccountPrinciples />}
								path="account-principles"
							/>
							<Route
								element={
									<PsychologistSide
										selectedChat={selectedChat}
									/>
								}
								path="psy-side"
							/>
						</>
					) : (
						<Route path="signup/" element={<RegisterPage />} />
					)}
					<Route path="*" element={<MainPage />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
};

export default App;
