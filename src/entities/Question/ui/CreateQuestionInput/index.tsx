import styles from './index.module.scss';
import Input from '../../../../shared/ui/Input';
import { Question } from '../../model/types';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTotalQuestions } from '../../../../app/store/quizSlice';

interface CreateQuestionInputProps {
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    questions: Question[];
    currentQuestion: number;
    disabled?: boolean;
    onCursorChange?: (position: number) => void;
    handleInputShowKeyboard: (show: boolean) => void;
    tur?: number;
    variant?: "default" | "response_true" | "response_false";
}

export default function CreateQuestionInput({className, tur, onChange, value, onCursorChange, questions, currentQuestion, variant = "default", disabled, handleInputShowKeyboard }: CreateQuestionInputProps) {
    const current = questions[currentQuestion];
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(setTotalQuestions(questions.length));
    }, [dispatch, questions.length]);

      const handleContainerClick = (e: React.MouseEvent) => {
        if (!(e.target instanceof HTMLInputElement)) {
            handleInputShowKeyboard(false);
        }
    };

    const handleInputClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        handleInputShowKeyboard(true);
    };

  return (
    <div className={`${styles.main} ${className}`} onClick={handleContainerClick}>
        <div className={styles.main__header}>
        <div className={styles.main__tur}>{tur} тур</div>
        <div className={styles.main__count_response}>
          Вопрос {currentQuestion + 1}/{questions.length}
        </div>
        <div className={styles.main__response_text}>{current.question}</div>
        <Input 
          disabled={disabled}
          variant={variant}
          placeholder='Введите ответ'
          onClick={(e) => handleInputClick(e)}
          value={value}
          onCursorChange={onCursorChange}
          onChange={onChange}
        />
      </div>
    </div>
  )
}
