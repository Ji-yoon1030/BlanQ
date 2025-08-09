//import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";
import Input from "../components/input";
import Button from "../components/button";

const Login = () => {
  const navigate = useNavigate(); // ✅ 라우팅 함수 준비

  const handleLogin = () => {
    // 여기서 로그인 검증 로직을 넣을 수도 있음
    navigate("/start"); // ✅ start 페이지로 이동
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sign in</h1>
      <div className={styles.form}>
        <Input label="ID" placeholder="Enter your ID" />
        <Input label="PW" placeholder="Enter your Password" type="password" />
      </div>
      <div className={styles.buttonWrapper}>
        <Button label="Sign in" onClick={handleLogin} />
      </div>
    </div>
  );
};

export default Login;
