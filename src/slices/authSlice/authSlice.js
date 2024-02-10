import { createSlice } from '@reduxjs/toolkit';
import { registerUser, loginUser } from './authAsyncActions';

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
			});
	},
});

export const { actions: authActions } = authSlice;
export const { reducer: authReducer } = authSlice;
