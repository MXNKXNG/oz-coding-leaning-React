import { Component } from 'react'
import './App.css'



// // 과제 1
// class App extends Component {
//     render() {
//         return (
//             <>
//                 <h1>React 컴포넌트에는 두 가지 종류가 있죠.</h1>
//                 <div>
//                     이것은 클래스형 컴포넌트입니다.
//                     <p>React 너무나도 재밌죠 ???</p>
//                     <p>JavaScript와는 다른 새로운 세계가 펼쳐집니다</p>
//                     <span>기 대 되 는 건 가 ~</span>
//                 </div>
//             </>
//         )
//     }
// }

// // 과제 2

// function App () {
//   return (
//     <>
//       <h1>이건 함수형 컴포넌트입니다.</h1>
//       <p>JaveScript의 함수 문법을 활용하지요!</p>
//     </>
//   )
// }






// function App() {
//   const fruits = [
//     { name: "딸기", color: "빨강", 크기: 2 },
//     { name: "바나나", color: "노랑", 크기: 5 },
//     { name: "키위", color: "초록", 크기: 3 },
//     { name: "사과", color: "빨강", 크기: 4 },
//     { name: "블루베리", color: "파랑", 크기: 1 },
//     { name: "오렌지", color: "주황", 크기: 4 },
//     { name: "포도", color: "보라", 크기: 2 },
//     { name: "레몬", color: "노랑", 크기: 3 },
//     { name: "체리", color: "빨강", 크기: 2 },
//     { name: "수박", color: "초록", 크기: 8 },
//   ];
  
//   return (
//     <>
//       {fruits.filter((fruit) => fruit.color === "빨강")
//         .map((fruit) => (
//           <div key={fruit.name}>
//           이름: {fruit.name},
//           색깔: {fruit.color},
//           크기: {fruit.크기}
//           </div>
//         ))
//       }
//     </>
//   )
// }



// ----------------------------

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
