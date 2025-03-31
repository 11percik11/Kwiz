import { useState } from 'react';
import styles from './index.module.scss';

interface SelectProps {
  correctAnswer: number | undefined;
  optionsCount: number;
  selectedValue: number | null;
  onChange: (value: number | null) => void;
}

export default function Select({
  correctAnswer,
  optionsCount,
  selectedValue,
  onChange,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (value: number) => {
    if (selectedValue !== null) return;
    onChange(value);
    setIsOpen(false);
  };

  const getOptionStyle = (value: number) => {
    if (selectedValue === value) {
      return {
        backgroundColor: correctAnswer !== undefined && value === correctAnswer ? '#44BE72' : '#E3605F',
        borderColor: correctAnswer !== undefined && value === correctAnswer ? '#44BE72' : '#E3605F'
      };
    }
    return {
      backgroundColor: 'transparent',
      borderColor: '#ccc'
    };
  };

  return (
    <div className={styles.select}>
      <div 
        className={styles.select_value} 
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedValue ? `Часть ${selectedValue}` : 'Выбрать позицию'}
        <span className={`${styles.select_arrow} ${isOpen ? styles.select_arrowOpen : ''}`} />
      </div>
      
      {isOpen && (
        <div className={styles.select_options}>
          {Array.from({ length: optionsCount }).map((_, i) => {
            const value = i + 1;
            return (
              <div
                key={value}
                className={styles.select_option}
                onClick={() => handleOptionClick(value)}
                style={{
                  cursor: selectedValue !== null ? 'default' : 'pointer',
                  opacity: selectedValue !== null && selectedValue !== value ? 0.5 : 1
                }}
              >
                <div 
                  className={styles.custom_radio}
                  style={getOptionStyle(value)}
                />
                <span>Часть {value}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}