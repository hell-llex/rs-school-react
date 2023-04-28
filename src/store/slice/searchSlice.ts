import { createSlice } from '@reduxjs/toolkit';
import { ISearchCards, Photo } from '../../types/type';

const initialState: ISearchCards = {
  сards: [],
  isLoading: false,
  error: '',
};

export const searchCardsSlice = createSlice({
  name: 'searchCards',
  initialState,
  reducers: {
    updateCardSearch(state, action: { payload: Photo[]; type: string }) {
      state.сards = action.payload;
    },
  },
});

export const searchCardReducer = searchCardsSlice.reducer;
export const { updateCardSearch } = searchCardsSlice.actions;
