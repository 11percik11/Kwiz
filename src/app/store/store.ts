import { configureStore } from '@reduxjs/toolkit';
import quizReducer from './quizSlice';
import turSlice from '../../entities/Tur/model/slice';

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
    tur: turSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;