import React, { useState } from 'react';
import styles from './index.module.scss'
import iconTrue from "../../assets/svg/Icon-true.svg";
import iconFalse from "../../assets/svg/Icon-false.svg";;

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  className?: string;
  disabled?: boolean;
  name?: string;
  variant?: "default" | "response_true" | "response_false";
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onCursorChange?: (position: number) => void;
}

export default function Input({ 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  className = '', 
  disabled = false,
  variant = "default", 
  name,
  onClick,
  onKeyUp,
  onCursorChange,
  defaultValue = '', 
}: InputProps) {
  const [localValue, setLocalValue] = useState(defaultValue);

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    onClick?.(e);
    const pos = e.currentTarget.selectionStart || 0;
    onCursorChange?.(pos);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalValue(e.target.value);
    const pos = e.target.selectionStart || 0;
    onCursorChange?.(pos);
    onChange?.(e);
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const pos = e.currentTarget.selectionStart || 0;
    if (
      e.key === 'ArrowLeft' ||
      e.key === 'ArrowRight' ||
      e.key === 'ArrowUp' ||
      e.key === 'ArrowDown' ||
      e.key === 'Home' ||
      e.key === 'End'
    ) {
      onCursorChange?.(pos);
    }
    onKeyUp?.(e);
  };

  return (
    <div className={`${styles.inputWrapper}`}>
    <input
      type={type}
      placeholder={placeholder}
      className={`${styles.input} ${className} ${
        styles[`input__${variant}`]
      }`}
      disabled={disabled}
      name={name}
      onClick={handleClick}
      onKeyUp={handleKeyUp}
      value={value !== undefined ? value : localValue}
      onChange={handleChange}
      />
      {(variant === "response_true" || variant === "response_false") && (
        <div className={styles.iconContainer}>
          {variant === "response_true" && (
            <img src={iconTrue} alt="Valid" className={styles.statusIcon} />
          )}
          {variant === "response_false" && (
            <img src={iconFalse} alt="Invalid" className={styles.statusIcon} />
          )}
        </div>
      )}
      </div>
  );
}