import { createSlice } from '@reduxjs/toolkit';
import { ILoader } from '../../types/type';

const initialState: ILoader = {
  show: false,
  error: '',
};

const loaderSlice = createSlice({
  name: 'popupCard',
  initialState,
  reducers: {
    showLoader(state, action: { payload: boolean; type: string }) {
      state.show = action.payload;
      state.error = '';
    },
  },
});

export const loaderReducer = loaderSlice.reducer;
export const { showLoader } = loaderSlice.actions;
