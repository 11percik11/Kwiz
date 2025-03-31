import React from 'react';
import styles from './index.module.scss';
import backspace from '../../shared/assets/svg/backspace.svg';

interface KeyboardProps {
  onKeyPress: (key: string) => void;
  className?: string; 
}

const Keyboard: React.FC<KeyboardProps> = ({ onKeyPress, className }) => {
  const firstRow = ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ'];
  const secondRow = ['ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э'];
  const thirdRow = ['я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', 'ё'];
  const fourthRow = [' '];

  const handleKeyClick = (key: string | React.ReactNode) => {
    if (typeof key === 'string') {
      onKeyPress(key);
    } else {
      onKeyPress('(x)');
    }
  };

  return (
    <div className={`${styles.keyboard} ${className}`} >
      <div className={styles.row}>
        {firstRow.map((key, index) => (
          <button 
            key={`first-${index}`} 
            className={styles.key}
            onClick={() => handleKeyClick(key)}
          >
            {key}
          </button>
        ))}
        <button 
          className={`${styles.key} ${styles.backspace}`}
          onClick={() => handleKeyClick('(x)')}
        >
          <img src={backspace} alt="backspace" className={styles.backspaceIcon} />
        </button>
      </div>
      
      <div className={styles.row}>
        {secondRow.map((key, index) => (
          <button 
            key={`second-${index}`} 
            className={styles.key}
            onClick={() => handleKeyClick(key)}
          >
            {key}
          </button>
        ))}
        <button 
          className={`${styles.key} ${styles.enter}`}
          onClick={() => handleKeyClick('Enter')}
        >
          Enter
        </button>
      </div>
      
      <div className={styles.row}>
        {thirdRow.map((key, index) => (
          <button 
            key={`third-${index}`} 
            className={styles.key}
            onClick={() => handleKeyClick(key)}
          >
            {key}
          </button>
        ))}
      </div>
      <div className={styles.row}>
        {fourthRow.map((key, index) => (
          <button 
            key={`third-${index}`} 
            className={`${styles.key} ${styles.space}`}
            onClick={() => handleKeyClick(key)}
          >
            {key}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Keyboard;