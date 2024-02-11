import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './userSlice/userSlice';
import { authReducer } from './authSlice/authSlice';
import messageReducer from './messageSlice';
import { chatsReducer } from './chatsSlice/chatsSlice';
import { helpReqReducer } from './clientSlice/helpReqSlice';
import { sendChatLinkReducer } from './chatsSlice/chatLinksSlice';
import { selectedChatReducer } from './chatsSlice/selectedChatSlice';

export default configureStore({
	reducer: {
		auth: authReducer,
		user: userReducer,
		helpReq: helpReqReducer,
		message: messageReducer,
		chats: chatsReducer,
		sendChatLink: sendChatLinkReducer,
		selectedChat: selectedChatReducer,
		// chat: chatReducer
	},
});
