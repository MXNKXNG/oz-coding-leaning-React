
import { Component, useState, useEffect } from "react"
import './App.css'




// Counter 컴포넌트 토글
function App() {
    const [showCounter, setShowCounter] = useState(false)

    return (
        <>
            {showCounter && <Counter />}
            <button onClick={() => setShowCounter((prev) => !prev)}>show?</button>
        </>
    )
}

// function 생명 주기
function Counter () {
    const [ counter, setCounter ] = useState(1)
    const [ counter2, setCounter2 ] = useState(100)


    // 1. 컴포넌트가 Mount 될 때 실행
    useEffect(() => {
        console.log("마운트") 
    }, [])

    // 2. 컴포넌트가 리렌더링 될 때 실행
    useEffect(() => {
        console.log("리렌더링") 
    })

    // 3. 특정 상태값이 변화했을 때 실행
    useEffect(() => {
        console.log("값이 변할 때") 
    }, [counter])

    // 4. 컴포넌트가 Unmount 될 때 실행
    useEffect(() => {
        return () => {
            console.log("언마운트")
        }
    }, [])

    return (
        <>
            <div>counter: {counter}</div>
            <button onClick={ () => {
                setCounter( counter + 1)
            }}>
                +1
            </button>

            <div>counter2: {counter2}</div>
            <button onClick={ () => {
                setCounter2( counter2 - 1)
            }}>
                -1
            </button>
        </>
    )

}


// // class 생명 주기
// class Counter extends Component {
//     constructor() {
//         super()
//         this.state = { counter: 1 }
//         console.log("constructor")
//     }

//     // 컴포넌트가 실행될 때 실행
//     componentDidMount() {
//         console.log("DidMount")
//     }

//     // props나 state가 업데이트될 때 실행
//     componentDidUpdate() {
//         console.log("DidUpdate")
//     }

//     // 컴포넌트가 사라질 때 실행
//     componentWillUnmount() {
//         console.log("WillUnmount")
//     }
    

//     render() {
//         console.log("render")
//         return (
//             <>
//                 <div>counter: {this.state.counter}</div>
//                 <button onClick={ () => {
//                     this.setState( {counter: this.state.counter + 1} )
//                 }}>
//                     +1
//                 </button>
//             </>
//         )
//     }
// }

export default App
