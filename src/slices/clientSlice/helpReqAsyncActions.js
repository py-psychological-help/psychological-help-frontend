import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setMessage } from '../messageSlice';
import { BASE_URL } from '../../utils/const';

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
				`${BASE_URL}users/clients/`,
				formData,
				config
			);
			return response.data;
		} catch (error) {
			if (error.response && error.response.data) {
				const message = 'Произошла ошибка регистрации заявки';
				thunkAPI.dispatch(setMessage(message));
			}
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
