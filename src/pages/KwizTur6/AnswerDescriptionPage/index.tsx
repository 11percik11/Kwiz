import { Button } from '../../../shared/ui';
import styles from './index.module.scss';
import { Question } from '../../../entities/Question/model/types';

interface AnswerDescriptionProps {
  questions: Question[];
  currentQuestion: number;
  onClose: () => void;
}

export default function AnswerDescription({onClose, questions, currentQuestion}: AnswerDescriptionProps) {
  const current = questions[currentQuestion] || null;
  const title = current?.answers?.[0].description?.[0].title;
  const textDescription = current?.answers?.[0].description?.[0].textDescription;

  return (
    <div className={styles.answerDescription}>
        <div className={styles.answerDescription__title}>{title || ''}</div>
        <div className={styles.answerDescription__textDescription}>{textDescription || ''}</div>
        <Button onClick={onClose} variant='navigation' className={styles.answerDescription__button}>Закрыть</Button>
    </div>
  )
}
