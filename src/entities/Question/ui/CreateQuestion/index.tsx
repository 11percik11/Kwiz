import { useDispatch } from "react-redux";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import { Question } from "../../model/types";
import {
  incrementCorrectAnswers,
  resetQuiz,
  setTotalQuestions,
} from "../../../../app/store/quizSlice";
import { ButtonResponse } from "../../../../shared/ui";
import ButtonInput from "../../../../shared/ui/ButtonInput";

interface CreateQuestionProps {
  className?: string;
  currentQuestion: number;
  questions: Question[];
  onAnswerSelected: (isSelected: boolean) => void;
  tur?: number;
}

export default function CreateQuestion({
  className = "",
  currentQuestion,
  questions,
  onAnswerSelected,
  tur,
}: CreateQuestionProps) {
  const dispatch = useDispatch();
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);
  const currentQ = questions[currentQuestion];

  useEffect(() => {
    dispatch(setTotalQuestions(questions.length));
    dispatch(resetQuiz());
  }, [dispatch, questions.length]);

  useEffect(() => {
    setIsAnswerSelected(false);
    onAnswerSelected(false);
  }, [currentQuestion]);

  const handleAnswerClick = (isCorrect: boolean) => {
    setIsAnswerSelected(true);
    onAnswerSelected(true);
    

    if (isCorrect) {
      dispatch(incrementCorrectAnswers());
    }
  };

  return (
    <div className={`${styles.main} ${className}`}>
      {!currentQ.img ? (
        <div className={styles.main__header}>
          <div className={styles.main__tur}>{tur} тур</div>
          <div className={styles.main__count_response}>
            Вопрос {currentQuestion + 1}/{questions.length}
          </div>
          <div className={styles.main__response_text}>{currentQ.question}</div>
        </div>
      ) : (
        <div className={styles.main__headerBlock}>
          <div className={styles.main__textContent}>
            <div className={styles.main__tur}>{tur} тур</div>
            <div className={styles.main__count_response}>
              Вопрос {currentQuestion + 1}/{questions.length}
            </div>
            <div className={styles.main__response_text}>
              {currentQ.question}
            </div>
          </div>
          <div className={styles.main__imageContainer}>
            <img
              src={`../../../../../public/foto${currentQ.img}`}
              alt="foto"
              className={styles.main__image}
            />
          </div>
        </div>
      )}
      <div className={styles.main__response}>
        {currentQ.answers.map((answer, index) =>
          answer.userLink ? (
            <ButtonInput 
              className={styles.main__response__itemInput}
              imgUrl={`../../../../../public/foto/${answer.userLink}`}
              disabled={isAnswerSelected}
              counter={index + 1}
              value={answer.correct}
              onClick={() => handleAnswerClick(answer.correct)}
            ></ButtonInput>
          ) : (
            <ButtonResponse
              className={styles.main__response__item}
              onClick={() => handleAnswerClick(answer.correct)}
              key={`${currentQ.id}_${answer.id}`}
              value={answer.correct}
              disabled={isAnswerSelected}
              counter={index + 1}
            >
              {answer.text}
            </ButtonResponse>
          )
        )}
      </div>
    </div>
  );
}
