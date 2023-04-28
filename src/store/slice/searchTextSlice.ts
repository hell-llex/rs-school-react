import { createSlice } from '@reduxjs/toolkit';

const initialState: { text: string; error: string } = {
  text: '',
  error: '',
};

const searchTextSlice = createSlice({
  name: 'searchText',
  initialState,
  reducers: {
    saveSearchText(state, action: { payload: string; type: string }) {
      state.text = action.payload;
      state.error = '';
    },
  },
});

export const searchTextReducer = searchTextSlice.reducer;
export const { saveSearchText } = searchTextSlice.actions;
