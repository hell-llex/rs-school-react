import { createSlice } from '@reduxjs/toolkit';
import { IFormCards, Photo } from '../../types/type';
import data from '../../photos.json';

const initialState: IFormCards = {
  сards: [...data],
  isLoading: false,
  error: '',
};

export const homeCardsSlice = createSlice({
  name: 'homeFormCard',
  initialState,
  reducers: {
    addCardHome(state, action: { payload: Photo; type: string }) {
      state.сards.push(action.payload);
    },
  },
});

export const homeCardsReducer = homeCardsSlice.reducer;
export const { addCardHome } = homeCardsSlice.actions;
