import { createSlice } from '@reduxjs/toolkit';
import { AskForHelpReq } from './helpReqAsyncActions';

const initialState = {};

export const helpReqSlice = createSlice({
	name: 'helpReq',
	initialState,
	reducers: {
		resetSuccessStatus: (state) => {
			state.isSuccess = false;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(AskForHelpReq.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
				state.isSuccess = false;
			})
			.addCase(AskForHelpReq.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state = action.payload;
			})
			.addCase(AskForHelpReq.rejected, (state, action) => {
				state.isLoading = false;
				state.isSuccess = false;
				state.error = action.payload;
			});
	},
});

export const { actions: helpReqActions } = helpReqSlice;
export const { reducer: helpReqReducer } = helpReqSlice;
