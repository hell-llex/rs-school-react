import { createSlice } from '@reduxjs/toolkit';
import { IPopupCard, Photo } from '../../types/type';

const initialState: IPopupCard = {
  show: false,
  card: undefined,
  error: '',
};

const popupCardSlice = createSlice({
  name: 'popupCard',
  initialState,
  reducers: {
    popupCard(state, action: { payload: { show: boolean; card?: Photo }; type: string }) {
      state.show = action.payload.show;
      state.card = action.payload.card;
      state.error = '';
    },
  },
});

export const popupCardReducer = popupCardSlice.reducer;
export const { popupCard } = popupCardSlice.actions;
