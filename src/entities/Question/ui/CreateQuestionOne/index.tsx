
import styles from "./index.module.scss";
import { Question, Answer } from "../../model/types";
import { ButtonResponse } from "../../../../shared/ui";
import { useEffect, useState } from "react";

interface CreateQuestionProps {
  className?: string;
  currentQuestion: number;
  onClick?: (isCorrect: boolean) => void;
  questions: Question[];
  onAnswerSelected: (isSelected: boolean) => void;
  answersConfig?: {
    maxAnswers?: number;     
    answersPerRow?: number; 
  };
  tur?: number;
}

export default function CreateQuestionOne({
  className = "",
  currentQuestion,
  questions,
  onClick,
  onAnswerSelected,
  tur,
  answersConfig = { maxAnswers: 10, answersPerRow: 5 }
}: CreateQuestionProps) {
  const currentQ = questions[0];
  const [displayedAnswers, setDisplayedAnswers] = useState<Answer[]>([]);
  
  const handleAnswerClick = (isCorrect: boolean) => {
    onAnswerSelected(true);
    onClick?.(isCorrect);
  };

  const getAnswersForCurrentPart = (answers: Answer[], partIndex: number) => {
    const maxAnswers = answersConfig.maxAnswers || 10;
    const start = partIndex * maxAnswers;
    const end = start + maxAnswers;
    
    return answers.slice(start, end);
  }

  useEffect(() => {
    if (currentQ && currentQ.answers) {
      const answersToDisplay = getAnswersForCurrentPart(currentQ.answers, currentQuestion);
      setDisplayedAnswers(answersToDisplay);
    }
  }, [currentQuestion, currentQ]);

  const answersPerRow = answersConfig.answersPerRow || 5;
  const answerWidth = `calc(${100 / answersPerRow}% - 2px)`;

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
              alt="Роза Ветров" 
              className={styles.main__image} 
            />
          </div>
        </div>
      )}
      <div className={styles.main__response}>
        {displayedAnswers.map((answer) => (
          <ButtonResponse
            className={styles.main__response__item}
            onClick={() => handleAnswerClick(answer.correct)}
            key={`${currentQ.id}_${answer.id}`}
            value={answer.correct}
            counter={Number(answer.id)}
            style={{ flex: `0 0 ${answerWidth}` }}
          >
            {answer.text}
          </ButtonResponse>
        ))}
      </div>
    </div>
  );
}