import svgFace from "../../assets/svg/icon-face.svg";
import styles from './index.module.scss';

export default function Logo() {
  return (
    <div className={styles.logo}>
        <img src={svgFace} alt="Logo" />
        <p className={styles.logo_title}>Дубенский районный <br></br> краеведческий музей</p>
    </div>
  )
}
