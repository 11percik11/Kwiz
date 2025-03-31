import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalQuestions: 0,
  correctAnswers: 0,
  sumTotalQuestions: 0,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setTotalQuestions: (state, action) => {
      state.totalQuestions = action.payload;
    },
    setCorrectAnswers: (state, action) => {
      state.correctAnswers = action.payload;
    },
    incrementCorrectAnswers: (state) => {
      state.correctAnswers += 1;
    },
    incrementsumTotalQuestions: (state) => {
      state.sumTotalQuestions += 1;
    },
    resetQuiz: (state) => {
      state.correctAnswers = 0;
    },
  },
});
export const { setTotalQuestions, setCorrectAnswers, incrementCorrectAnswers, resetQuiz, incrementsumTotalQuestions } = quizSlice.actions;

export default quizSlice.reducer;