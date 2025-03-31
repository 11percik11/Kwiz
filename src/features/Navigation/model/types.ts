import { Question } from '../../../entities/Question/model/types';

export interface Quiz {
  id: string;              // Уникальный идентификатор теста
  title: string;           // Название теста
  questions: Question[];   // Список вопросов (используем сущность "Вопрос")
}

export interface QuizResult {
  quizId: string;          // ID теста
  score: number;           // Количество правильных ответов
  total: number;           // Общее количество вопросов
}