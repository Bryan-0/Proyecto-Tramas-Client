import { createSlice } from '@reduxjs/toolkit';

const tramaSlice = createSlice({
    name: 'trama',
    initialState: {
        content: '',
        result: {},
        showResults: false,
    },
    reducers: {
        setTrama: (state, action) => {
            state.content = action.payload;
        },
        setResult: (state, action) => {
            state.result = action.payload;
        },
        setShowResults: (state, action) => {
            state.showResults = action.payload;
        },
        resetAll: (state) => {
            state.content = '';
            state.result = {};
            state.showResults = false;
        },
    },
});

export const { setTrama, setResult, setShowResults, resetAll } = tramaSlice.actions;
export default tramaSlice.reducer;