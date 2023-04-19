import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { homeCardsReducer } from './slice/formSlice';
import { latestCardsReducer } from './slice/latestSlice';
import { popupCardReducer } from './slice/popupSlice';
import { loaderReducer } from './slice/loaderSlice';
import { searchCardReducer } from './slice/searchSlice';
import { searchTextReducer } from './slice/searchTextSlice';
import { photoApi } from '../services/PhotoService';
import { exampleCardReducer } from './slice/exampleCardSlice';

const rootReducer = combineReducers({
  formCards: homeCardsReducer,
  latestCards: latestCardsReducer,
  popupCard: popupCardReducer,
  searchCard: searchCardReducer,
  loader: loaderReducer,
  searchText: searchTextReducer,
  exampleCard: exampleCardReducer,
  [photoApi.reducerPath]: photoApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(photoApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
