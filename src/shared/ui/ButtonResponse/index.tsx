import React, { useEffect, useState } from "react";
import styles from './index.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
  value?: boolean;
  style?: React.CSSProperties;
  variant?: "valueTrue" | "valueFalse" | "default" | "unavailable";
  counter?: number;
}

export default function ButtonResponse({
  children,
  onClick,
  disabled,
  value,
  style,
  type = "button",
  className = "",
  variant: initialVariant = "default",
  counter,
}: ButtonProps) {
  const [currentVariant, setCurrentVariant] = useState(initialVariant);

  useEffect(() => {
    setCurrentVariant(initialVariant);
  }, [initialVariant]);

  const valueW = () => {
    if (value !== undefined) {
      setCurrentVariant(value ? "valueTrue" : "valueFalse");
    }
  }

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    valueW()
  };

  return (
    <button
      type={type}
      className={`${styles.button} ${styles[`button--${currentVariant}`]} ${className}`}
      onClick={handleClick}
      disabled={disabled}
      style={style}
    >
      <div className={styles.button__div}>{counter}</div>
      {children}
    </button>
  );
};