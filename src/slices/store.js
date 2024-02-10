import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './userSlice/userSlice';
import { authReducer } from './authSlice/authSlice';
import messageReducer from './messageSlice';
import { chatsReducer } from './chatsSlice/chatsSlice';
import { sendChatLinkReducer } from './chatsSlice/chatLinksSlice';

export default configureStore({
	reducer: {
		auth: authReducer,
		user: userReducer,
		message: messageReducer,
		chats: chatsReducer,
		sendChatLink: sendChatLinkReducer,
		// chat: chatReducer
	},
});
