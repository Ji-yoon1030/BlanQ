import React from "react";
import styles from "./input.module.css";

interface InputProps {
  label: string;
  placeholder: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ label, placeholder, type = "text" }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.labelBox}>{label}</div>
      <input className={styles.inputBox} type={type} placeholder={placeholder} />
    </div>
  );
};

export default Input;

