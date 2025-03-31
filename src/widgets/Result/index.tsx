import { useNavigate } from "react-router-dom";
import { Button } from "../../shared/ui";
import styles from "./index.module.scss";
import img1 from '../../shared/assets/foto/icon (1).png';
import img2 from '../../shared/assets/foto/icon (2).png';
import img3 from '../../shared/assets/foto/icon (3).png';
import { useSelector } from "react-redux";
import { RootState } from "../../app/store/store";

interface TitleResultProps {
  toLink?: string;
}

export default function Result({ toLink }: TitleResultProps) {
  const correctAnswers = useSelector((state: RootState) => state.quiz.correctAnswers);
  const totalQuestions = useSelector((state: RootState) => state.quiz.totalQuestions);
  const navigate = useNavigate();

  const ClickMainPage = () => {
    navigate("/");
  };

  const ClickTurPage = () => {
    navigate(`${toLink}`);
  };

  const getResultMessage = () => {
    if (totalQuestions === correctAnswers) {
      return (
        <>
          <img src={img1} alt="#" />
          <div className={styles.titleresult__boxTitle_title}>ВЫ СПРАВИЛИСЬ ОТЛИЧНО!</div>
          <div className={styles.titleresult__boxTitle_result}>ВЫ ОТВЕТИЛИ ПРАВИЛЬНО НА {correctAnswers}/{totalQuestions} ВОПРОСОВ</div>
        </>
      );
    } else if (totalQuestions / 2 <= correctAnswers) {
      return (
        <>
            <img src={img2} alt="#" />
          <div className={styles.titleresult__boxTitle_title}>ХОРОШИЙ РЕЗУЛЬТАТ</div>
          <div className={styles.titleresult__boxTitle_result}>ВЫ ОТВЕТИЛИ ПРАВИЛЬНО НА {correctAnswers}/{totalQuestions} ВОПРОСОВ</div>
        </>
      );
    } else {
      return (
        <>
            <img src={img3} alt="#" />
          <div className={styles.titleresult__boxTitle_title}>НЕ СДАВАЙСЯ</div>
          <div className={styles.titleresult__boxTitle_result}>ВЫ ОТВЕТИЛИ ПРАВИЛЬНО НА {correctAnswers}/{totalQuestions} ВОПРОСОВ</div>
        </>
      );
    }
  };

  return (
    <div className={styles.titleresult}>
      <div className={styles.titleresult__boxTitle}>
        {getResultMessage()}
      </div>
      <div className={styles.titleresult__boxButton}>
        <Button className={`${styles.titleresult__boxButton_button} ${styles.titleresult__boxButton_button_margin}`} variant="navigation" onClick={ClickMainPage}>НА ГЛАВНУЮ</Button>
        <Button className={styles.titleresult__boxButton_button} variant="navigation" onClick={ClickTurPage}>ПРОДОЛЖИТЬ КВИЗ</Button>
      </div>
    </div>
  );
}