import styles from './button.module.css';

type ButtonProps = {
  className?: string;
  label?: string;
  onClick?: () => void;
}

export function Button({ className, label, onClick }: ButtonProps) {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
