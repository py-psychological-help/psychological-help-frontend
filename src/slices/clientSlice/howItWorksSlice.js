import { createSlice } from '@reduxjs/toolkit';
import { submitHelpRequest } from './howItWorksAsyncActions';

const initialState = {};

export const howItWorksSlice = createSlice({
	name: 'howItWorks',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(submitHelpRequest.pending, (state) => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(submitHelpRequest.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
			})
			.addCase(submitHelpRequest.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const { actions: howItWorksActions } = howItWorksSlice;
export const { reducer: howItWorksReducer } = howItWorksSlice;
