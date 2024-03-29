import { createSlice } from '@reduxjs/toolkit';
import { getCurrentUser, updateCurrentUser } from './userAsyncActions';

const initialState = {};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logout: (state) => {
			state.userData = undefined;
			state.isSuccess = false;
			state.error = null;
			state.isLoading = false;
			localStorage.removeItem('authToken');
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getCurrentUser.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(getCurrentUser.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.userData = action.payload;
			})
			.addCase(getCurrentUser.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(updateCurrentUser.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(updateCurrentUser.fulfilled, (state, action) => {
				state.isLoading = false;
				state.userData = action.payload;
			})
			.addCase(updateCurrentUser.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
