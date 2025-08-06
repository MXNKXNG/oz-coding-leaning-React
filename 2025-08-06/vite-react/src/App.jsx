// import { Component } from 'react'
import './App.css'

// class App extends Component {
//   render() {
//     return <div>안녕하세요?</div>
//   }
// }

function App() {
  return (
    <>
      <빵 />
      <치즈 />
      <패티 />
      <치즈 />
      <패티 />
      <토마토 />
      <양상추 />
      <빵 />
    </>
  )
}


function 빵 () {
  return (
    <>
      <div className="빵">
        밀가루
        <spam> 물</spam>
        <spam> 계란</spam>
        <spam> 이스트</spam>
      </div>
    </>
  )
}

function 패티 () {
  return (
    <>
      <div className="패티">
        소고기
        <spam> 후추</spam>
        <spam> 소금</spam>
      </div>
    </>
  )
}


function 양상추 () {
  return (
    <>
      <div className="양상추">
        잎사귀
        <spam> 줄기</spam>
      </div>
    </>
  )
}

function 토마토 () {
  return (
    <>
      <div className="토마토">
        껍질
        <spam> 과육</spam>
        <spam> 씨앗</spam>
      </div>
    </>
  )
}
function 치즈 () {
  return (
    <>
      <div className="치즈">
        우유
        <spam> 소금</spam>
        <spam> 색소</spam>
      </div>
    </>
  )
}





export default App
