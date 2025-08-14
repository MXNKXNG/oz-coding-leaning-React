
import { useState, useEffect, useRef } from "react"
import './App.css'

function App() {
    
    return (
        <>
            <Counter />
            <br />
            <FetchTest />
        </>
    )
}


export default App



const FetchTest = () => {
    const { loading, data, error } = useFetch("http://localhost:3000/data")
    
    return (
        <>
            {!loading && (
                <ul>
                    {data.map((el) => (
                        <li key={el.id}>{el.content}</li>
                    ))}
                </ul>
            )}
        </>
    )
}

// Fetch Custom Hook
const useFetch = (url) => {
    const [ loading, setLoading ] = useState(true)
    const [ data, setData ] = useState(null)
    const [ error, setError ] = useState(null)

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((res) => {
            setData(res);
            setLoading(false);
            console.log(res)

        })
        .catch((err) => {
            setError(err);
            setLoading(false);
        })
    }, [url]);

    return { loading, data, error }
}



const Counter = () => {
    const {count, increment, decrement} = useCounter(0, 5)

    return (
        <>
            <div>counter: {count}</div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </>
    )
}


// Counter Custom Hook
const useCounter = (initialValue = 0, step = 1) => {
    const [ count, setCounter ] = useState(initialValue)

    const increment = () => setCounter((prev) => prev + step)
    const decrement = () => setCounter((prev) => prev - step)

    return {count, increment, decrement}
}