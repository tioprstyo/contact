import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'
import { AllContactStateInterface } from "../../interface/redux-state/AllContactStateInterface";

const initialState: AllContactStateInterface = {
    contacts: [],
    isLoading: false,
    isSuccessful: false,
    error: {}
}

export const allContactSlice = createSlice({
    name: 'allContact',
    initialState,
    reducers: {
        getAllContactRequestAction: (state: any) => {
            state.isLoading = true;
        },
        getAllContactSuccessAction: (state: any, action: PayloadAction<[]>) => {
            state.contacts = action.payload;
            state.isLoading = false;
            state.isSuccessful = true
        },
        getAllContactFailedAction: (state: any, action: PayloadAction<{}>) => {
            state.isSuccessful = false
            state.result = action.payload
        },
    },
})

export const {
    getAllContactRequestAction,
    getAllContactSuccessAction,
    getAllContactFailedAction
} = allContactSlice.actions

export default allContactSlice.reducer