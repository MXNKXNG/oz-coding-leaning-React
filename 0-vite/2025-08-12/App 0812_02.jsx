import { useState } from "react"
import './App.css'
import { Link, Routes, Route, useNavigate, useLocation, useParams, useSearchParams } from "react-router-dom"



// Router 주요 컴포넌트
function App() {
    const navigate = useNavigate()
    return (
        <>
            {/* Link 컴포넌트 */}
            {/* <div>
            <Link to="/main">메인</Link>
            <Link to="/mypage"> 마이페이지</Link>
            <Link to="/test"> 테스트</Link>
            </div> */}

            {/* useNavigate 함수 */}
            <div>
                <button onClick={ () => navigate("/main")} >메인</button>
                <button onClick={ () => navigate("/mypage/name")} >마이페이지</button>
                <button onClick={ () => navigate("/test")} >테스트</button>
            </div>

            <div>
                <button onClick={ () => navigate(-1)}>← 뒤로가기</button>
                <button onClick={ () => navigate(1)}>앞으로가기 →</button>
            </div>

            {/* Routes & Route 컴포넌트 */}
            <Routes>
                <Route path="/main" element={<Main />} />
                <Route path="/mypage" element={<Mypage />} />
                <Route path="/test" element={<div>테스트 페이지</div>} />
            </Routes>
        </>
    )
}

function Main() {
    const location = useLocation() 
    console.log(location)

    const [searchParams, setSearchParams] = useSearchParams()

    console.log(searchParams.get("category"))
    console.log(searchParams.get("sort"))

    return <div>메인 페이지</div>
}

function Mypage() {
    const params = useParams()
    console.log(params)

    return <div>마이페이지</div>
}



export default App
