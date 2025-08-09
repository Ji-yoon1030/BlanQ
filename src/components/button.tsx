// components/Button.tsx
import React from "react";
import styles from "./button.module.css";


interface ButtonProps {
  label: string;
  onClick?: () => void;
  color?: string; // 배경 색상 (선택)
}

const Button: React.FC<ButtonProps> = ({ label, onClick, color = "#FFD54F" }) => {
  return (
    <button
      onClick={onClick}
      className={styles.button} // ✅ 이 부분 수정
      style={{ backgroundColor: color }}
    >
      {label}
    </button>
  );
};

export default Button;
