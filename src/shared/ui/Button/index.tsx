import styles from "./index.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
  variant?: "default" | "navigation";
}

export default function Button({
  children,
  onClick,
  disabled,
  type = "button",
  className = "",
  variant = "default",
}: ButtonProps) {
  return (
      <button
        type={type}
        className={`${styles.button} ${
          styles[`button__${variant}`]
        } ${className} ${disabled ? styles.button__nonavigation : ""}`}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
  );
}
