import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  numberTur: 1,
};

const turSlice = createSlice({
  name: 'tur',
  initialState,
  reducers: {
    incrementNumberTur: (state) => {
      state.numberTur += 1;
    },
    resetTur: (state) => {
      state.numberTur = 0;
    },
  },
});
export const {incrementNumberTur, resetTur } = turSlice.actions;

export default turSlice.reducer;