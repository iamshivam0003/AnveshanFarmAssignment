import {combineReducers, configureStore} from '@reduxjs/toolkit';
import cartSlice from './slices/cartSlice';
import saveForLaterSlice from './slices/saveLaterSlice'
import favouritesSlice from './slices/favouritesSlice'
const rootReducer = combineReducers({
  cart: cartSlice,
  saveForLater:saveForLaterSlice,
  favourites:favouritesSlice
});
export const store = configureStore({
  reducer: rootReducer,
});
