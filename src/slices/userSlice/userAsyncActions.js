import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const baseURL = 'https://letstalk.ddns.net/api/v1/';

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
