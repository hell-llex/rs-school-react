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
      state.сards.unshift(action.payload);
    },
  },
});

export const latestCardsReducer = latestCardsSlice.reducer;
export const { addCardLatest } = latestCardsSlice.actions;
