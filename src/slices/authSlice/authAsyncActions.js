import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const baseURL = 'https://letstalk.ddns.net/api/v1/';

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
					email,
					password,
				},
				config
			);
			return response.data;
		} catch (error) {
			if (error.response && error.response.data) {
				return thunkAPI.rejectWithValue(error.response.data); // Ошибка с бэка
			}
			return thunkAPI.rejectWithValue(error.message); // Для дефолтной или кастомной ошибки, мб понадобится
		}
	}
);

export const loginUser = createAsyncThunk(
	'auth/login',
	async ({ email, password }, { rejectWithValue }) => {
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			};
			const response = await axios.post(
				`${baseURL}auth/token/login/`,
				{ email, password }, // Поля из формы входа (идентичные)
				config
			);
			localStorage.setItem('authToken', response.data.auth_token);
			return response.data; // Должна быть инфа о пользователе, но пока только токен
		} catch (error) {
			if (error.response && error.response.data) {
				return rejectWithValue(error.response.data); // Ошибка с бэка
			}
			return rejectWithValue(error.message); // Для дефолтной или кастомной ошибки, мб понадобится
		}
	}
);
