import { configureStore } from '@reduxjs/toolkit';
import incomeReducer from './IncomeSlice';



const store = configureStore({
  reducer: {
    income: incomeReducer,
  },
});


export default store;