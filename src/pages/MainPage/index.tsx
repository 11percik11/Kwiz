import Header from "../../widgets/Header";
import styles from "./index.module.scss";
import compass from "../../shared/assets/svg/compass.svg";
import wheel from "../../shared/assets/svg/wheel.svg";
import ship from "../../shared/assets/svg/ship.svg";
import { Button } from "../../shared/ui";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <div className={styles.main}>
      <Header></Header>

      <div className={styles.parent}>
        <div className={`${styles.div1} ${styles.div}`}>
          <div>Квиз для старшеклассников «Умная морская душа»</div>
          <Link to="/kwiz/tur/1/title">
            <Button>НАЧАТЬ</Button>
          </Link>
        </div>
        <div className={`${styles.div2} ${styles.div}`}>
          <img className={styles.svg_ship} src={ship} alt="ship" />
        </div>
        <div className={`${styles.div3} ${styles.div}`}>
          <img src={compass} alt="compass" />
          <div>
            7 захватывающих <br /> этапов
          </div>
        </div>
        <div className={`${styles.div4} ${styles.div}`}>
          <img src={wheel} alt="wheel" />
          <div>
            Отправься в увлекательное
            <br /> путешествие по загадочным
            <br /> глубинам знаний
          </div>
        </div>
      </div>
    </div>
  );
}
