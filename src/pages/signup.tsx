//import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./signup.module.css";
import Input from "../components/input";
import Button from "../components/button";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    // 회원가입 검증 로직 등 가능
    navigate("/login"); // /특정경로 로 이동
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sign up</h1>
      <div className={styles.form}>
        <Input label="Name" placeholder="Enter your name" />
        <div className={styles.genderWrapper}>
          <div className={styles.genderLabel}>Gender</div>
          <div className={styles.genderButtons}>
            <label><input type="radio" name="gender" value="male" /> Male</label>
            <label><input type="radio" name="gender" value="female" /> Female</label>
            <label><input type="radio" name="gender" value="etc" /> Etc</label>
          </div>
        </div>
        <Input label="ID" placeholder="Enter your ID" />
        <Input label="PW" placeholder="Enter your Password" type="password" />
      </div>
      <div className={styles.buttonWrapper}>
        <Button label="Sign in" onClick={handleSignUp} />
      </div>
    </div>
  );
};

export default SignUp;
