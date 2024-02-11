import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setMessage } from '../messageSlice';

const baseURL = 'https://dpogovorim.ru/api/v1/';

export const registerUser = createAsyncThunk(
	'auth/register',
	async (
		{ firstName, lastName, birthDate, email, password }, // Поля из формы регистрации
		thunkAPI
	) => {
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			};
			const response = await axios.post(
				`${baseURL}users/psychologists/`,
				{
					first_name: firstName,
					last_name: lastName,
					birth_date: birthDate,
					email: email.toLowerCase(),
					password,
				},
				config
			);
			return response.data;
		} catch (error) {
			if (error.response && error.response.data) {
				// тут будут тексты ошибок от бэка, когда они их добавят
				// const message = error.response.data.non_field_errors.toString();
				const message = 'Произошла ошибка';

				thunkAPI.dispatch(setMessage(message));
			}
			return thunkAPI.rejectWithValue(error.response.data);
		}
	}
);

export const activateUser = createAsyncThunk(
	'auth/activateUser',
	async ({ uid, token }, thunkAPI) => {
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			};
			const response = await axios.post(
				`${baseURL}users/psychologists/activation/`,
				{ uid, token },
				config
			);
			return response.data;
		} catch (error) {
			if (error.response && error.response.data) {
				const message = 'Произошла ошибка';

				thunkAPI.dispatch(setMessage(message));
			}
			console.log(error);

			return thunkAPI.rejectWithValue(error.response.data);
		}
	}
);

export const loginUser = createAsyncThunk(
	'auth/login',
	async ({ email, password }, thunkAPI) => {
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			};
			const response = await axios.post(
				`${baseURL}auth/token/login/`,
				{ email: email.toLowerCase(), password }, // Поля из формы входа (идентичные)
				config
			);
			localStorage.setItem('authToken', response.data.auth_token);
			return response.data; // Должна быть инфа о пользователе, но пока только токен
		} catch (error) {
			if (error.response && error.response.data) {
				const message = error.response.data.non_field_errors.toString();

				thunkAPI.dispatch(setMessage(message));
			}
			return thunkAPI.rejectWithValue(error.response.data);
		}
	}
);

export const requestPasswordChange = createAsyncThunk(
	'auth/forgotPassword',
	async ({ email }, thunkAPI) => {
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			};
			const response = await axios.post(
				`${baseURL}users/psychologists/reset_password/`,
				{ email: email.toLowerCase() },
				config
			);
			return response.data;
		} catch (error) {
			if (error.response && error.response.data) {
				const message = 'Произошла ошибка';

				thunkAPI.dispatch(setMessage(message));
			}
			return thunkAPI.rejectWithValue(error.response.data);
		}
	}
);

export const resetPasswordChange = createAsyncThunk(
	'auth/resetPassword',
	async ({ uid, token, password }, thunkAPI) => {
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			};
			const response = await axios.post(
				`${baseURL}users/psychologists/reset_password_confirm/`,
				{ uid, token, new_password: password },
				config
			);
			console.log(response.data);
			return response.data;
		} catch (error) {
			if (error.response && error.response.data) {
				const message = 'Произошла ошибка';

				thunkAPI.dispatch(setMessage(message));
			}
			return thunkAPI.rejectWithValue(error.response.data);
		}
	}
);
