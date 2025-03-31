import { useNavigate } from "react-router-dom";
import { Button } from "../../shared/ui";
import styles from "./index.module.scss";

interface TitleTurProps {
  children: React.ReactNode;
  tur?: number;
  toLink?: string;
}

export default function TitleTur({ children, tur, toLink }: TitleTurProps) {
  const navigate = useNavigate();
  const ClickMainPage = () => {
    navigate("/");
  };

  const ClickTurPage = () => {
    navigate(`${toLink}`);
  };

  return (
    <div className={styles.titletur}>
      <div className={styles.titletur__boxTitle}>
        <div className={styles.titletur__boxTitle_tur}>{tur} тур</div>
        <div className={styles.titletur__boxTitle_title}>{children}</div>
      </div>
      <div className={styles.titletur__boxButton}>
        <Button className={`${styles.titletur__boxButton_button} ${styles.titletur__boxButton_button_margin}`} variant="navigation" onClick={ClickMainPage}>НА ГЛАВНУЮ</Button>
        <Button className={styles.titletur__boxButton_button} variant="navigation" onClick={ClickTurPage}>НАЧАТЬ</Button>
      </div>
    </div>
  );
}
