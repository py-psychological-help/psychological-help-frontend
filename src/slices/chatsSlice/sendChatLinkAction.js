import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../utils/const';
import makeRequest from '../../utils/makeRequest';

export const sendChatLink = createAsyncThunk(
	'chats/sendChatLink',
	async (chatSecretKey, thunkAPI) => {
		try {
			const response = await makeRequest({
				method: 'post',
				url: `${BASE_URL}chats/${chatSecretKey}/start/`,
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
