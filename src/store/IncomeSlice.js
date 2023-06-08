import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    incomes: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
      10: 0,
      11: 0,
      12: 0,
    },
  };
const incomeSlice = createSlice({
  name: 'income',
  initialState,
  reducers: {
    addIncome: (state, action) => {
      const { income, month } = action.payload;
      state.incomes[month]=income;
      console.log(state.incomes[month])
    },
  },
});

export const { addIncome } = incomeSlice.actions;

export default incomeSlice.reducer;
