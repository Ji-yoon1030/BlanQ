import { useState } from "react"; //메뉴 열림 상태 관리
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css"; // css파일명 정확히 

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // 메뉴 열림 여부

  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <nav className={styles.navbar}>
      {/* 햄버거 메뉴 아이콘 */}
      <button className={styles.menuIcon} onClick={toggleMenu}>
        ☰
      </button>

      {/* 드롭다운(로그인, 회원가입 버튼) 메뉴 */}
      {isOpen && (
        <div className={styles.dropdown}>
          <button onClick={() => navigate("/login")} className={styles.menuItem}>
            Sign in
          </button>
          <button onClick={() => navigate("/signup")} className={styles.menuItem}>
            Sign up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
