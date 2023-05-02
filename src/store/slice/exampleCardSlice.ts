import { createSlice } from '@reduxjs/toolkit';
import { IExampleCard, IExamplePhoto } from '../../types/type';

const initialState: IExampleCard = {
  card: {
    author: ' ',
    description: ' ',
    date: ' ',
    category: 'Landscape',
    hideAuthor: false,
    human: '0',
    image: '',
  },
  error: '',
};

const exampleCardSlice = createSlice({
  name: 'exampleCard',
  initialState,
  reducers: {
    exampleCard(state, action: { payload: IExamplePhoto; type: string }) {
      state.error = '';
      state.card = action.payload;
    },
  },
});

export const exampleCardReducer = exampleCardSlice.reducer;
export const { exampleCard } = exampleCardSlice.actions;
