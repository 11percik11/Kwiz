import { useState } from "react";
import { Question } from "../../../../entities/Question/model/types";
import CreateQuestion from "../../../../entities/Question/ui/CreateQuestion";
import Navigation from "../../../Navigation/ui";
import styles from "./index.module.scss";
import { incrementNumberTur } from "../../../../entities/Tur/model/slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

interface QuizPageProps {
  date: Question[];
  toLink: string;
  tur?: number;
}

const QuizPage = ({ date, toLink, tur = 1 }: QuizPageProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const questions: Question[] = date;

  const handleAnswerSelected = (isSelected: boolean) => {
    setIsAnswerSelected(isSelected);
  };

  const handleNextQuestion = () => {
    if (isAnswerSelected && currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setIsAnswerSelected(false);
    } else if (currentQuestion >= questions.length - 1) {
      dispatch(incrementNumberTur());
      navigate(toLink);
    }
  };

  return (
    <div className={styles.quiz}>
      <CreateQuestion
        tur = {tur}
        className={styles.quiz__createquestion}
        currentQuestion={currentQuestion}
        questions={questions}
        onAnswerSelected={handleAnswerSelected}
      />
      <Navigation
        className={styles.quiz__navigation}
        onNext={handleNextQuestion}
        isNextDisabled={!isAnswerSelected}
      />
    </div>
  );
};

export default QuizPage;
