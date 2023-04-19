import { createSlice } from '@reduxjs/toolkit';
import { ILatestCards, Photo } from '../../types/type';

const initialState: ILatestCards = {
  сards: [],
  isLoading: false,
  error: '',
};

export const latestCardsSlice = createSlice({
  name: 'latestCards',
  initialState,
  reducers: {
    addCardLatest(state, action: { payload: Photo; type: string }) {
      if (state.сards.length <= 10) {
        state.сards.unshift(action.payload);
      } else {
        state.сards = [action.payload];
      }
    },
  },
});

export const latestCardsReducer = latestCardsSlice.reducer;
export const { addCardLatest } = latestCardsSlice.actions;
