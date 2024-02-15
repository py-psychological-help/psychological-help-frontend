import { createSlice } from '@reduxjs/toolkit';
import {
	registerUser,
	activateUser,
	loginUser,
	requestPasswordChange,
	resetPasswordChange,
} from './authAsyncActions';

const authToken = localStorage.getItem('authToken')
	? localStorage.getItem('authToken')
	: null;

const initialState = {
	isLoading: false,
	authToken,
	error: null,
	isSuccess: false,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout: (state) => {
			state.error = null;
			state.isLoading = false;
			state.isSuccess = false;
			state.authToken = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(registerUser.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(registerUser.fulfilled, (state) => {
				state.isLoading = false;
				state.isSuccess = true;
			})
			.addCase(registerUser.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			}) // Нужно ли разделять разные редьюсеры?
			.addCase(activateUser.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(activateUser.fulfilled, (state) => {
				state.isLoading = false;
				state.isSuccess = true;
			})
			.addCase(activateUser.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(loginUser.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(loginUser.fulfilled, (state, action) => {
				state.isLoading = false;
				// state.userData = action.payload; // С бэка пока приходит только токен (без юзера), позже поправят
				state.authToken = action.payload.auth_token; // Поправить в будущем snake_case
			})
			.addCase(loginUser.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(requestPasswordChange.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(requestPasswordChange.fulfilled, (state) => {
				state.isLoading = false;
				state.isSuccess = true;
			})
			.addCase(requestPasswordChange.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(resetPasswordChange.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(resetPasswordChange.fulfilled, (state) => {
				state.isLoading = false;
				state.isSuccess = true;
			})
			.addCase(resetPasswordChange.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { actions: authActions } = authSlice;
export const { reducer: authReducer } = authSlice;
