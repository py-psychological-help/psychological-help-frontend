import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './userSlice/userSlice';
import { authReducer } from './authSlice/authSlice';

export default configureStore({
	reducer: {
		auth: authReducer,
		user: userReducer,
		// chat: chatReducer
	},
});
