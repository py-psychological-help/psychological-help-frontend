import { Route, Routes, useNavigate } from 'react-router-dom';
import React, { useEffect, useState, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cls from './App.module.scss';
import AccountPage from '../../pages/AccountPage/AccountPage';
import AccountChatPage from '../../pages/AccountChatPage/AccountChatPage';
import AccountPrinciples from '../../pages/AccountPrinciples/AccountPrinciples';
import MainPage from '../../pages/MainPage/MainPage';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AccountDocumentsPage from '../../pages/AccountDocumentsPage/AccountDocumentsPage';
import PsychologistSide from '../PsychologistSide/PsychologistSide';
import ClientSide from '../ClientSide/ClientSide';
import { getCurrentUser } from '../../slices/userSlice/userAsyncActions';

// lazy components
const ActivateUserPageLazy = lazy(() =>
	import('../../pages/ActivateUserPage/ActivateUserPage')
);
const WelcomePageLazy = lazy(() =>
	import('../../pages/WelcomePage/WelcomePage')
);
const WaitingRoomLazy = lazy(() => import('../WaitingRoom/WaitingRoom'));
const LoginPageLazy = lazy(() => import('../../pages/LoginPage/LoginPage'));
const RegisterPageLazy = lazy(() =>
	import('../../pages/RegisterPage/RegisterPage')
);
const NewPasswordLazy = lazy(() =>
	import('../../pages/ResetPasswordPage/ResetPasswordPage')
);
const ForgotPasswordLazy = lazy(() =>
	import('../../pages/ForgotPasswordPage/ForgotPasswordPage')
);
const SuccessRegisterPageLazy = lazy(() =>
	import('../../pages/SuccessRegisterPage/SuccessRegisterPage')
);

const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const authToken = useSelector((state) => state.auth.authToken);
	const userIsTrue = useSelector((state) => state.user.userData);
	const { isSuccess } = useSelector((state) => state.user);

	// Получения даты юзера по токену, с помощью useSelector эти данные можно юзать во всё приложении
	// Добавить проверки на налиие токена и т.п.
	useEffect(() => {
		// создаёт перерендеры при каждой смене роута, позже пофиксить
		if (authToken) {
			dispatch(getCurrentUser());
		}
		// eslint-disable-next-line
	}, [dispatch, authToken]);

	useEffect(() => {
		if (isSuccess) navigate('/account-chat');
		// eslint-disable-next-line
	}, [isSuccess]);

	const [selectedChat, setSelectedChat] = useState();

	const handleChatSelection = (chat) => {
		setSelectedChat(chat);
	};

	return (
		<div className={cls.app}>
			{/* Добавить лоадер */}
			<Suspense fallback="...Loading">
				<Header isLoggedIn={isLoggedIn} />

				<main className={cls.main}>
					<Routes>
						<Route element={<MainPage />} path="/" />
						<Route element={<WelcomePageLazy />} path="/welcome" />
						<Route
							element={<ClientSide />}
							path="/client-side/:key/"
						/>
						<Route element={<LoginPageLazy />} path="/signin" />
						<Route element={<RegisterPageLazy />} path="/signup" />
						<Route
							element={<SuccessRegisterPageLazy />}
							path="/success-register"
						/>
						<Route
							element={<ActivateUserPageLazy />}
							path="/activate/:uid/:token"
						/>
						<Route
							element={<WaitingRoomLazy />}
							path="/waiting-room"
						/>
						<Route
							element={<ForgotPasswordLazy />}
							path="/forgotpassword"
						/>
						<Route
							element={<NewPasswordLazy />}
							path="/reset-confirmation/:uid/:token"
						/>

						{userIsTrue ? (
							<>
								<Route
									element={<AccountPage />}
									path="account"
								/>
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
									path="/psy-side/:key/"
								/>
							</>
						) : (
							<Route
								path="signup/"
								element={<RegisterPageLazy />}
							/>
						)}
						<Route path="*" element={<MainPage />} />
					</Routes>
				</main>
				<Footer />
			</Suspense>
		</div>
	);
};

export default App;
