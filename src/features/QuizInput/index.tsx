import { useState } from "react";
import styles from "./index.module.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Question } from "../../entities/Question/model/types";
import Navigation from "../Navigation/ui";
import Keyboard from "../../entities/Keyboard";
import CreateQuestionInput from "../../entities/Question/ui/CreateQuestionInput";
import { incrementNumberTur } from "../../entities/Tur/model/slice";
import { incrementCorrectAnswers } from "../../app/store/quizSlice";
import AnswerDescription from "../../pages/KwizTur6/AnswerDescriptionPage";

interface QuizInputProps {
  date: Question[];
  toLink: string;
}

export default function QuizInput({ date, toLink }: QuizInputProps) {
  const [inputValue, setInputValue] = useState("");
  const [cursorPosition, setCursorPosition] = useState(0);
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [variant, setVariant] = useState<
    "default" | "response_true" | "response_false"
  >("default");
  const [disabledInput, setDisabledInput] = useState<boolean>(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showAnswerDescription, setShowAnswerDescription] =
    useState<boolean>(false);
  const questions = date;

  const handleInputShowKeyboard = (show: boolean) => {
    setShowKeyboard(show);
  };

  const handleKeyPress = (key: string) => {
    if (key === "Enter") {
      const correctAnswer =
        questions[currentQuestion].answers[0].text?.toLowerCase();
      const userAnswer = inputValue.toLowerCase();

      if (userAnswer === correctAnswer) {
        setInputValue("");
        setCursorPosition(0);
        setVariant("response_true");
        dispatch(incrementCorrectAnswers());
      } else {
        setVariant("response_false");
      }
      setDisabledInput(true);
      setIsAnswerSelected(true);
      setShowKeyboard(false);
    } else if (key === "(x)") {
      if (cursorPosition > 0) {
        setInputValue(
          inputValue.substring(0, cursorPosition - 1) +
            inputValue.substring(cursorPosition)
        );
        setCursorPosition(cursorPosition - 1);
      }
    } else {
      setInputValue(
        inputValue.substring(0, cursorPosition) +
          key +
          inputValue.substring(cursorPosition)
      );
      setCursorPosition(cursorPosition + 1);
    }
  };

  const changeNavigation = () => {
    setShowAnswerDescription(true);
  };

  const handleNextQuestion = () => {
    if (isAnswerSelected && currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setIsAnswerSelected(false);
      setInputValue("");
      setDisabledInput(false);
      setVariant("default");
      setShowAnswerDescription(false);
    } else if (currentQuestion >= questions.length - 1) {
      dispatch(incrementNumberTur());
      navigate(toLink);
    }
  };

  const handleParentClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setShowKeyboard(false);
    }
  };

  return (
    <div className={styles.quiz}>
      <CreateQuestionInput
        disabled={disabledInput}
        variant={variant}
        handleInputShowKeyboard={handleInputShowKeyboard}
        className={styles.quiz__createquestion}
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        currentQuestion={currentQuestion}
        questions={questions}
        onCursorChange={setCursorPosition}
      />
      <Navigation onNext={changeNavigation} isNextDisabled={!isAnswerSelected} />
      {showKeyboard && (
        <div className={styles.keyboardWrapper} onClick={handleParentClick}>
          <Keyboard onKeyPress={handleKeyPress} />
        </div>
      )}
      {showAnswerDescription && (
        <div className={styles.answerDescriptionOverlay}>
          <AnswerDescription
            questions={questions}
            onClose={handleNextQuestion}
            currentQuestion={currentQuestion}
          ></AnswerDescription>
        </div>
      )}
    </div>
  );
}
