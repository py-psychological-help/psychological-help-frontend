import { Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
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
import WelcomePage from "../../pages/WelcomePage/WelcomePage";
import { getCurrentUser } from '../../slices/userSlice/userAsyncActions';


const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const dispatch = useDispatch();

	// Получения даты юзера по токену, с помощью useSelector эти данные можно юзать во всё приложении
	// Добавить проверки на налиие токена и т.п.
	useEffect(() => {
		const user = getCurrentUser();
		if (user !== null) {
			setIsLoggedIn(true);
		}
	}, [dispatch]);


	return (
		<div className={cls.app}>
			<Header isLoggedIn={isLoggedIn} />

			<main className={cls.main}>
				<Routes>
					<Route element={<MainPage />} path="/" />
					<Route element={<WelcomePage/>} path="/welcome"/>
					<Route element={<ClientSide />} path="client-side" />
					<Route element={<LoginPage />} path="/signin" />
					<Route path="signup/" element={<RegisterPage/>}/>

					{isLoggedIn ? (
						<>
						<Route element={<AccountPage />} path="account" />
				<Route
					element={<AccountDocumentsPage />}
					path="/account/documents"
				/>
				<Route element={<AccountChatPage />} path="account-chat" />
				<Route
					element={<AccountPrinciples />}
					path="account-principles"
				/>
				<Route element={<PsychologistSide />} path="psy-side" />
						</>
						)
					: (<Route path="signup/" element={<RegisterPage />}/>)
					}
					<Route path="*" element={<MainPage />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
};

export default App;
