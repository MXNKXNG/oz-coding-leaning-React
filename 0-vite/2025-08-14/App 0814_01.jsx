
import { useState, useEffect, useRef } from "react"
import './App.css'

function App() {

    return (
        <>
            <ControlledInput />
            <br />
            <UseRefInput />
            <Counter />
        </>
    )
}


export default App


const Counter = () => {
    const [ counter, setCounter ] = useState(0)
    const numberRef = useRef(null)

    return (
        <>
            <div>counter: {counter}</div>
            <button onClick={() => {
                setCounter((prev) => prev + 1)
            }}>
                +
            </button>
            <button onClick={() => {
                setCounter((prev) => prev - 1)
            }}>
                -
            </button>
            <button onClick={() => numberRef.current = counter}>Keep value</button>
            <button onClick={() => console.log(numberRef.current)}>show value</button>
        </>
    )
}








const ControlledInput = () => {
    const [inputValue, SetInputValue] = useState("")
    console.log(inputValue)

    return (
        <input value={inputValue} onChange={(e) => {
            SetInputValue(e.target.value)
        }}/>
    )
}


// useRef
const UseRefInput = () => {
    const inputRef = useRef(null)
    const getInputValue = () => {
        console.log(inputRef.current.value)
    }

    const focusInput = () => {
        inputRef.current.focus()
    }

    return (
        <>
            <input ref={inputRef}/>
            <button onClick={getInputValue}>input 가져오기</button>
            <button onClick={focusInput}>focus</button>
        </>
    )
}