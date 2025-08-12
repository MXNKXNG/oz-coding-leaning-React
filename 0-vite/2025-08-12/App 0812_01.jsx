import { useState } from "react"
import './App.css'


function App() {
    const [ mood, setMood ] = useState("Normal")

    return (
        <>
            <Face mood={mood}/>
            <div className={mood === "Happy" ? "happy" : mood === "Normal" ? "normal" : "sad"}>기분: {mood}</div>
            <div>
                <button onClick={ () => setMood("Happy")}>Happy</button>
                <button onClick={ () => setMood("Normal")}>Normal</button>
                <button onClick={ () => setMood("Sad")}>Sad</button>
            </div>
        </>
    )
}


// 1. if문으로 return하는 JSX문 바꿔주기
// 조건에 맞는 부분만 렌더링 하고 싶을 때
function Face({ mood }) {
    if (mood === "Happy") {
        return <div>😁</div>
    } else if (mood === "Normal") {
        return <p>🙂</p>
    } else {
        return <span>😭</span>
    }
}


// 2. 삼항 연산자 활용
// 조건에 맞는 부분만 렌더링 하고 싶을 때
function Face2({ mood }) {
    return (
        <>
            {mood === "Happy" ? (
                <div>😊</div> 
            ) : mood === "Normal" ? (
                <p>🙂</p>
            ) : (
                <span>😭</span>
            )}
        </>
    )
}


// 3. 논리 연산자 활용
// 특정 상황에서만 렌더링 하고 싶을 때
function Face3({ mood }) {
    return (
        <>
            {mood === "Happy" && <div>😊</div>}
            {mood === "Normal" && <div>🙂</div>}
            {mood === "Sad" && <div>😭</div>}
        </>
    )
} 



export default App
