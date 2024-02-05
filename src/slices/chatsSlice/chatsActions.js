import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../config';
import makeRequest from '../../utils/makeRequest';

export const fetchChats = createAsyncThunk(
	'chats/fetchChats',
	async (arg, thunkAPI) => {
		try {
			const response = await makeRequest({
				url: `${BASE_URL}chats/`,
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Token ${localStorage.getItem('authToken')}`,
				},
			});

			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(
				error.response ? error.response.data : error.message
			);
		}
	}
);
