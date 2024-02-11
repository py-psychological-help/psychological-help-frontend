import { createSlice } from '@reduxjs/toolkit';

const selectedChatSlice = createSlice({
	name: 'selectedChat',
	initialState: null,
	reducers: {
		addChat: (state, action) => {
			return action.payload;
		},
		removeChat: (state, action) => {
			return null;
		},
	},
});

export const { addChat, removeChat } = selectedChatSlice.actions;
export const { reducer: selectedChatReducer } = selectedChatSlice;
