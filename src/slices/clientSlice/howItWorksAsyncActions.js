import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const baseURL = 'https://letstalk.ddns.net/api/v1/';

export const submitHelpRequest = createAsyncThunk(
    'howItWorks/submitHelpRequest',
    async (formData, thunkAPI) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            const response = await axios.post(
                `${baseURL}users/clients/`,
                formData,
                config
            );
            return response.data;
        } catch (error) {
            if (error.response && error.response.data) {
                return thunkAPI.rejectWithValue(error.response.data);
            }
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
