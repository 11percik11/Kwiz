import { useSelector } from "react-redux";
import { RootState } from "../../../app/store/store";
import styles from './index.module.scss';

export default function Results() {
  const totalQuestions = useSelector((state: RootState) => state.quiz.totalQuestions);
  const correctAnswers = useSelector((state: RootState) => state.quiz.correctAnswers);

  return (
      <div className={styles.result}>
        Вы ответили правильно на {correctAnswers} / {totalQuestions} вопросов
      </div>
  );
}