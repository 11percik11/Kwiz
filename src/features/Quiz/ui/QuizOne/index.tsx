import { useRef, useState } from "react";
import { Question } from "../../../../entities/Question/model/types";
import Navigation from "../../../Navigation/ui";
import styles from "./index.module.scss";
import CreateQuestionOne from "../../../../entities/Question/ui/CreateQuestionOne";
import { incrementNumberTur } from "../../../../entities/Tur/model/slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { incrementCorrectAnswers } from "../../../../app/store/quizSlice";

interface QuizOneProps {
  date: Question[];
  toLink: string;
  answersConfig?: {
    maxAnswers?: number;
    answersPerRow?: number;
  };
  tur?: number;
}

const QuizOne = ({ date, toLink, answersConfig, tur }: QuizOneProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const questions: Question[] = date;
  const currentQ = questions[0];

  const correctAnswersCount: number = currentQ.answers.filter(
    (answer) => answer.correct
  ).length;

  const selectedAnswersRef = useRef({
    correct: 0,
    incorrect: 0,
  });

  const handleAnswerSelected = (isSelected: boolean) => {
    setIsAnswerSelected(isSelected);
  };

  const handleAnswerClick = (isCorrect: boolean) => {
    if (isCorrect) {
      selectedAnswersRef.current.correct += 1;
    } else {
      selectedAnswersRef.current.incorrect += 1;
    }
  };

  const handleNextQuestion = () => {
    const maxAnswersPerPage = answersConfig?.maxAnswers || 10;

    if (
      isAnswerSelected &&
      currentQuestion < Math.ceil(currentQ.answers.length / maxAnswersPerPage) - 1
    ) {
      if (
        selectedAnswersRef.current.correct === correctAnswersCount &&
        selectedAnswersRef.current.incorrect === 0
      ) {
        dispatch(incrementCorrectAnswers());
      }
      setCurrentQuestion((prev) => prev + 1);
      setIsAnswerSelected(false);
    } else if (currentQuestion >= questions.length - 1) {
      if (
        selectedAnswersRef.current.correct === correctAnswersCount &&
        selectedAnswersRef.current.incorrect === 0
      ) {
        dispatch(incrementCorrectAnswers());
      }
      dispatch(incrementNumberTur());
      navigate(toLink);
    }
  };

  return (
    <div className={styles.quiz}>
      <CreateQuestionOne
      tur={tur}
        currentQuestion={currentQuestion}
        questions={questions}
        onAnswerSelected={handleAnswerSelected}
        onClick={handleAnswerClick}
        answersConfig={answersConfig}
      />
      <Navigation
        className={styles.quiz__navigation}
        onNext={handleNextQuestion}
        isNextDisabled={!isAnswerSelected}
      />
    </div>
  );
};

export default QuizOne;
