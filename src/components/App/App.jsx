import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../../pages/Login/Login';
import MainPage from '../../pages/MainPage/MainPage';
import Account from '../../pages/Account/Account';
import Register from '../../pages/Register/Register';

const App = () => {
	return (
		<Routes>
			<Route element={<MainPage />} path="/" />
			<Route element={<Account />} path="/account" />
			<Route element={<Login />} path="signin" />
			<Route element={<Register />} path="signup" />
		</Routes>
	);
};

export default App;
