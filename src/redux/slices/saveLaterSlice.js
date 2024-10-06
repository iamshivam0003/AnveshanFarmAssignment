import {createSlice} from '@reduxjs/toolkit';

const initialState = [];

const saveLaterSlice = createSlice({
  name: 'saveForLater',
  initialState,
  reducers: {
    addToSaveForLater: (state, actions) => {
      state.push(actions.payload);
    },
    removeFromSaveForLater: (state, actions) => {
      return state.filter((ele, ind) => {
        return ele?.id != actions.payload;
      });
    },
  },
});

export default saveLaterSlice.reducer;

export const {addToSaveForLater, removeFromSaveForLater} =
  saveLaterSlice.actions;
