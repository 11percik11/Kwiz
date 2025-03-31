import { useNavigate } from "react-router-dom";
import { Button } from "../../../shared/ui";
import styles from "./index.module.scss";

interface NavigationProps {
  onNext?: () => void;
  isNextDisabled?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function Navigation({
  onNext,
  isNextDisabled,
  className = "",
}: NavigationProps) {
  const navigate = useNavigate();
  function clickMain() {
    navigate("/");
  }
  return (
    <div className={styles.navigation}>
      <Button
        onClick={clickMain}
        className={`${styles.navigation__button} ${className}`}
        variant="navigation"
      >
        НА ГЛАВНУЮ
      </Button>
      <Button
        className={className}
        variant="navigation"
        onClick={onNext}
        disabled={isNextDisabled}
      >
        ДАЛЕЕ
      </Button>
    </div>
  );
}
