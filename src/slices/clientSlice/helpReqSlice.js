import { createSlice } from '@reduxjs/toolkit';
import { AskForHelpReq } from './helpReqAsyncActions';

const initialState = {};

export const helpReqSlice = createSlice({
	name: 'helpReq',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(AskForHelpReq.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(AskForHelpReq.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
			})
			.addCase(AskForHelpReq.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { actions: helpReqActions } = helpReqSlice;
export const { reducer: helpReqReducer } = helpReqSlice;
