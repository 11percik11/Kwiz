import { useState } from "react";
import { Question } from "../../../../entities/Question/model/types";
import CreateQuestionSelect from "../../../../entities/Question/ui/CreateQuestionSelect";
import Navigation from "../../../Navigation/ui";
import styles from './index.module.scss';

interface QuizSelectProps {
  date: Question[];
  toLink: string;
  tur?: number;
}

export default function QuizSelect({ date, toLink, tur = 1 }: QuizSelectProps)  {
  // const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  const questions: Question[] = date;

  const handleAnswerSelected = (isSelected: boolean) => {
    setIsAnswerSelected(isSelected);
  };

  // const handleNextQuestion = () => {
  //   if (isAnswerSelected && currentQuestion < questions.length - 1) {
  //     setCurrentQuestion((prev) => prev + 1);
  //     setIsAnswerSelected(false);
  //   } else if (currentQuestion >= questions.length - 1) {
  //     dispatch(incrementNumberTur());
  //     navigate(toLink);
  //   }
  // };

  return (
    <div className={styles.quiz}>
      <CreateQuestionSelect 
        tur = {tur}
        className={styles.quiz__createquestion}
        // currentQuestion={currentQuestion}
        questions={questions}
        onAnswerSelected={handleAnswerSelected}
      />


      <Navigation
        className={styles.quiz__navigation}
        // onNext={handleNextQuestion}
        isNextDisabled={!isAnswerSelected}
      />
    </div>
  );
};
