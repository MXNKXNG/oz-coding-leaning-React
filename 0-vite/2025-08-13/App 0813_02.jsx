
import { useState, useEffect } from "react"
import './App.css'

function App() {
    const [ data, setData ] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/data")
        .then((res) => res.json())
        .then((res) => setData(res) )
    }, [])

    return (
        <>
            <h2>데이터 목록</h2>
            {data.map((el) => (
                <div key={el.id}>
                    {el.content}
                </div>
            ))}

            <MouseFollower />
            <br />
            <Scroll />
            <AlertTimer />
            <div style={{height: "200vh"}}></div>
        </>
    )
}


// 타이머
const AlertTimer = () => {
    const [ showAlert, SetShowAlert ] = useState(true)

    useEffect(() => {
        const setTimeoutId = setTimeout(() => {
            console.log(showAlert)
            showAlert === true ? alert("시간 초과") : null
        }, 3000)
        return () => {
            clearTimeout(setTimeoutId)
        }
    })
    return <button onClick={() => {
        SetShowAlert(false)
    }}>빨리 클릭!</button>
}


// 스크롤
const Scroll = () => {
    const [ scrollWidth, setScrollWidth ] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
            const scrollPercentage = (scrollTop / windowHeight) * 100
            setScrollWidth(scrollPercentage)
        }
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
    
    return (
        <>
            <div style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: `${scrollWidth}%`,
                height: "10px",
                backgroundColor: "blue"
            }}
            >
            </div>
        </>
    )
}


// 마우스
const MouseFollower = () => {
    const [ position, setPosition ] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handMouseMove = (event) => {
            setPosition({ x: event.clientX, y: event.clientY }) // 현재 화면에서 x,y 값
        }
        window.addEventListener("mousemove", handMouseMove)

        return () => {
            window.removeEventListener("mousemove", handMouseMove)
        }
    }, [])
    
    return (
        <>
            <div style={{
                position: "absolute",
                top: position.y,
                left: position.x,
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                backgroundColor: "blue",
                transform: "translate(-50%,-50%)",
                pointerEvents: "none"
            }}
            >
            </div>
        </>
    )
}


export default App
