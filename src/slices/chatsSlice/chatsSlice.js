import { createSlice } from '@reduxjs/toolkit';
import { fetchChats } from './chatsActions';

const chatsSlice = createSlice({
	name: 'chats',
	initialState: {
		chats: [],
		loading: false,
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchChats.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchChats.fulfilled, (state, action) => {
				state.loading = false;
				state.chats = action.payload;
			})
			.addCase(fetchChats.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			});
	},
});

export const { reducer: chatsReducer } = chatsSlice;
