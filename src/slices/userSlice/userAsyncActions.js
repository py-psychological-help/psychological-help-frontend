import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setMessage } from '../messageSlice';

const baseURL = 'https://dpogovorim.ru/api/v1/';

export const getCurrentUser = createAsyncThunk(
	'user/getCurrentUser',
	async (thunkAPI) => {
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Token ${localStorage.getItem('authToken')}`,
				},
			};
			const response = await axios.get(
				`${baseURL}users/psychologists/me/`,
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

export const updateCurrentUser = createAsyncThunk(
	'user/updateCurrentUser',
	async ({ firstName, lastName, birthDate }, thunkAPI) => {
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Token ${localStorage.getItem('authToken')}`,
				},
			};
			const response = await axios.patch(
				`${baseURL}users/psychologists/me/`,
				{
					first_name: firstName,
					last_name: lastName,
					birth_date: birthDate,
				},
				config
			);
			return response.data;
		} catch (error) {
			if (error.response && error.response.data) {
				const message = 'Произошла ошибка';
				thunkAPI.dispatch(setMessage(message));
			}
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
