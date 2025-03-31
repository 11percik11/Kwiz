import React, { useState } from 'react';
import styles from './index.module.scss';

interface ButtonInputProps {
  imgUrl?: string;
  counter?: number;
  disabled?: boolean;
  onClick?: () => void;
  value?: boolean;
  variant?: "valueTrue" | "valueFalse" | "default";
  className?: string;
}

const ButtonInput: React.FC<ButtonInputProps> = ({ imgUrl, disabled, onClick, counter, className, value, variant: initialVariant = "default"}) => {
    const [checked, setChecked] = useState(false);
    const [currentVariant, setCurrentVariant] = useState(initialVariant);
    const [clickVariant, setClickVariant ] = useState(true);
    const valueW = () => {
      console.log(value);
      
      if (value !== undefined) {
        setCurrentVariant(value ? "valueTrue" : "valueFalse");
      }
    }
  const handleDivClick = () => {
    if (onClick && !disabled) {
      onClick();
    }
    if (!disabled) {
      setClickVariant(!clickVariant)
      setChecked(true)
      valueW()
    }
  };

  return (
    <div className={`${styles.buttoninput} ${styles[`buttoninput--${currentVariant}`]} ${(disabled && clickVariant) ? styles.buttoninput__disabled : ''} ${className} `}
      style={{
        backgroundImage: `url(${imgUrl})`,
      }}
      onClick={handleDivClick}
    >
    <div className={styles.buttoninput__div}>{counter}</div>
      <input 
        className={styles.buttoninput__input}
        type="checkbox"
        checked={checked}
      />
    </div>
  );
};

export default ButtonInput;