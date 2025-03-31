import { Logo } from '../../shared/ui';
import styles from './index.module.scss';
import iconLogo from '../../shared/assets/svg/icon-logo.svg'

export default function Header() {
  return (
    <div className={styles.header}>
        <Logo></Logo>
        <img className={styles.header__svg} src={iconLogo} alt="" />
    </div>
  )
}
