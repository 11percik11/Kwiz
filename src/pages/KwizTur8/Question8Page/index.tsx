import { useNavigate } from 'react-router-dom';
import { Button } from '../../../shared/ui';
import styles from './index.module.scss';
import questionsData from '../../../shared/data/tur8.json';

export default function Question8Page() {

    
    const questions = questionsData || [];
    const navigate = useNavigate();
  const ClickMainPage = () => {
    navigate("/");
  };

  const ClickTurPage = () => {
    // navigate(`${'/kwiz/tur/8'}`);
  };

  return (
        <div className={styles.titletur}>
      <div className={styles.titletur__boxTitle}>
        <div className={styles.titletur__boxTitle_tur}>8 тур</div>
        <div></div>
        <div className={styles.titletur__boxTitle_title}>{questions[0].question}</div>
      </div>
      <div className={styles.titletur__boxButton}>
        <Button className={`${styles.titletur__boxButton_button} ${styles.titletur__boxButton_button_margin}`} variant="navigation" onClick={ClickMainPage}>НА ГЛАВНУЮ</Button>
        <Button className={styles.titletur__boxButton_button} variant="navigation" onClick={ClickTurPage}>СОБРАТЬ ПИСЬМО</Button>
      </div>
    </div>
  )
}
