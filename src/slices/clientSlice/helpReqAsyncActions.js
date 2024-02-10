import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setMessage } from '../messageSlice';

const baseURL = 'https://dpogovorim.ru/api/v1/';

export const AskForHelpReq = createAsyncThunk(
	'helpReq/AskForHelpReq',
	async (formData, thunkAPI) => {
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			};
			const response = await axios.post(
				`${baseURL}users/clients/`,
				formData,
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
