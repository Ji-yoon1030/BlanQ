/*url경로와 각 페이지를 연결(라우팅) 담당
다른 페이지에서 버튼 클릭 시 useNavigate()를 사용하면 원하는 경로 이동 설정 가능*/ 
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import StartPage from "./pages/start"; // 각 /경로 에 연결할 화면 요소들을 import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/start" />} /> {/* start페이지를 초기 진입 페이지로 설정 */}
        <Route path="/start" element={<StartPage />} />       {/* 각 경로 /경로 에 해당하는 컴포넌트 보여줌*/}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App; //App 컴포넌트를 main.tsx에서 불러와서 실행하는 것 
