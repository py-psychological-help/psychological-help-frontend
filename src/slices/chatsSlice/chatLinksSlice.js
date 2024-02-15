import { createSlice } from '@reduxjs/toolkit';
import { sendChatLink } from './sendChatLinkAction';

const sendChatLinkSlice = createSlice({
	name: 'chatLinks',
	initialState: {
		sendingStatus: {},
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(sendChatLink.pending, (state, action) => {
				const { chatSecretKey } = action.meta.arg;
				state.sendingStatus[chatSecretKey] = { loading: true };
			})
			.addCase(sendChatLink.fulfilled, (state, action) => {
				const { chatSecretKey } = action.meta.arg;
				state.sendingStatus[chatSecretKey] = {
					loading: false,
					success: true,
				};
			})
			.addCase(sendChatLink.rejected, (state, action) => {
				const { chatSecretKey } = action.meta.arg;
				state.sendingStatus[chatSecretKey] = {
					loading: false,
					error: action.payload,
				};
			});
	},
});

export const { reducer: sendChatLinkReducer } = sendChatLinkSlice;
