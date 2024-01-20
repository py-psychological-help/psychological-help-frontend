import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './userSlice/userSlice';
import { authReducer } from './authSlice/authSlice';
import messageReducer from './messageSlice';

export default configureStore({
	reducer: {
		auth: authReducer,
		user: userReducer,
		message: messageReducer,
		// chat: chatReducer
	},
});
