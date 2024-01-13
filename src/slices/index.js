import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';

export default configureStore({
	reducer: {
		// Свойство user будет внутри объекта общего состояния: state.user
		user: userReducer,
	},
});
