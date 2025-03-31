import styles from "./index.module.scss";
import { Question } from "../../model/types";
import Select from "../../../../shared/ui/Select";
import { Button } from "../../../../shared/ui";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { incrementsumTotalQuestions } from "../../../../app/store/quizSlice";
// import { useAppDispatch } from "../../../../app/store";
// import { incrementsumTotalQuestions } from "../../../../features/quiz/quizSlice";

interface CreateQuestionSelectProps {
  className?: string;
  questions: Question[];
  tur?: number;
  questionId?: string;
}

export default function CreateQuestionSelect({
  className = "",
  questions,
  tur,
  questionId = "defaultQuestionId",
}: CreateQuestionSelectProps) {
  const dispatch = useDispatch();
  const currentQ = questions[0];
  const [activeTab, setActiveTab] = useState<number>(0);
  const [selectedValues, setSelectedValues] = useState<{[key: number]: number | null}>({});
  const [correctness, setCorrectness] = useState<{[key: number]: boolean}>({});

  useEffect(() => {
    const savedValues = localStorage.getItem(`question_${questionId}`);
    if (savedValues) {
      setSelectedValues(JSON.parse(savedValues));
    }
    
    const savedCorrectness = localStorage.getItem(`question_correctness_${questionId}`);
    if (savedCorrectness) {
      setCorrectness(JSON.parse(savedCorrectness));
    }
  }, [questionId]);

  useEffect(() => {
    checkAllAnswersCorrect();
  }, [correctness]);

  const checkAllAnswersCorrect = () => {
    const allAnswered = Object.keys(selectedValues).length === currentQ.answers.length;
    if (!allAnswered) return;

    const allCorrect = Object.values(correctness).every(val => val === true);
    if (allCorrect) {
      dispatch(incrementsumTotalQuestions());
    }
  };

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const handleSelectChange = (tabIndex: number, value: number | null) => {
    const newValues = {
      ...selectedValues,
      [tabIndex]: value
    };
    const isCorrect = value === currentQ.answers[tabIndex].correctNumber;
    const newCorrectness = {
      ...correctness,
      [tabIndex]: isCorrect
    };
    
    setSelectedValues(newValues);
    setCorrectness(newCorrectness);
    
    localStorage.setItem(`question_${questionId}`, JSON.stringify(newValues));
    localStorage.setItem(`question_correctness_${questionId}`, JSON.stringify(newCorrectness));
  };

  return (
    <div className={`${styles.main} ${className}`}>
      <div className={styles.main__header}>
        <div className={styles.main__tur}>{tur} тур</div>
        <div className={styles.main__title_text}>Расположите части письма так, чтобы получился логически связанный текст</div>
      </div>
      <div className={styles.main__response}>
        <div className={styles.main__response_blok}>
          <Select 
            correctAnswer={currentQ.answers[activeTab].correctNumber}
            optionsCount={currentQ.answers.length}
            selectedValue={selectedValues[activeTab] || null}
            onChange={(value) => handleSelectChange(activeTab, value)}
          />
          <textarea 
            className={styles.main__response_blok_text} 
            value={currentQ.answers[activeTab].text} 
            readOnly
          />
        </div>
        <div className={styles.main__conteinerButton}>
          {currentQ.answers.map((_, index) => (
            <Button 
              key={index}
              variant="default"
              onClick={() => handleTabClick(index)}
            >
              Отрывок {index + 1}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}