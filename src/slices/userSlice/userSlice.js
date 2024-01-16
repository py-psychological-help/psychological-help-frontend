import { createSlice } from '@reduxjs/toolkit';
import { getCurrentUser } from './userAsyncActions';

const initialState = {};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUserData: (state, action) => {
			state.userData = action.payload;
		},
		logout: (state) => {
			state.userData = undefined;
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
			});
	},
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
