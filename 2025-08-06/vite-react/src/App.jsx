// import { Component } from 'react'
import './App.css'

// class App extends Component {
//   render() {
//     return <div>안녕하세요?</div>
//   }
// }

function App() {
  const number = 10;
  return (
    <>
      <div>
        함수형 컴포넌트
        <div>{ 1 + number }</div>
      </div>
      <div>
        형제 요소
        <span>자식 요소</span>
      </div>
    </>
  )
}

export default App
