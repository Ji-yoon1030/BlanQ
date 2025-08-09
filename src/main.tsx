import { StrictMode } from 'react'//실제 동작에 영향X, 콘솔에 경고 띄워줌 (개발 환경에서의 잠재적 문제 찾아내기 위함)
import { createRoot } from 'react-dom/client'//React 18에서 사용하는 최신 방식의 DOM 루트 생성 함수
import './index.css'//전역 index.css를 적용
import App from './App.tsx'//최상위 컴포넌트인 App.tsx 불러오기

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
/*root라는 ID를 가진 html요소에 App을 redering
!: null이 아님
*/ 