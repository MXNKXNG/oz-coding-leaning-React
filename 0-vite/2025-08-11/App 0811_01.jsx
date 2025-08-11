import { useState } from "react"
import './App.css'



// 참조 자료형 복사 spead syntax
function App() {
    const [array, setArray] = useState([1, 2, 3]);
    const handler = () => {
        const newArray = [...array]
        newArray.push(4)
        setArray(newArray)
    }

    return (
        <>
            array : [{array.join(",")}]
            <br />
            <button onClick={handler}>상태 업데이트</button>
        </>
    )
}



// // 참조 자료형 복사 slice()
// function App() {
//     const [array, setArray] = useState([1, 2, 3]);
//     const handler = () => {
//         const newArray = array.slice()
//         newArray.push(4)
//         setArray(newArray)
//     }

//     return (
//         <>
//             array : [{array.join(",")}]
//             <br />
//             <button onClick={handler}>상태 업데이트</button>
//         </>
//     )
// }



// // 원시 자료형
// function App () {
//     const [nunber, setNumber] = useState(1);
//     const handler = () => {
//         setNumber(nunber + 1)   // 기존 상태랑 다른 상태여야만 업데이트 된다
//     }
//     return (
//         <>
//             number : {nunber}
//             <br />
//             <button onClick={handler}>상태 업데이트</button>
//         </>
//     )
// }


export default App
