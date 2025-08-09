import Navbar from "../components/Navbar";
import Button from "../components/button";
import styles from "./start.module.css";

const StartPage = () => {
  return (
    <div className={styles.container}>
      {/* === 상단 고정 네비게이션 === */}
      <Navbar />

      {/* === 메인 로고 텍스트 === */}
      <h1 className={styles.logo}>
        Blan<span className={styles.highlight}>Q</span>
      </h1>

      {/* === 부제목 === */}
      <p className={styles.subtitle}>Blank, fill with Question</p>

      {/* === 하단 버튼 === */}
      <div className={styles.buttonWrapper}>
        <Button label="Get start" />
      </div>
    </div>
  );
};

export default StartPage;
