import { useState } from "react"
import './App.css'

// TODO
function App() {
    const [todoList, setTodoList] = useState([
        {id: 0, content: "밥 먹기"}
    ])

    const addTodo = (content) => {
        setTodoList((prev) => [...prev, { id: crypto.randomUUID(), content}])
    }

    const updateTodo = (id, content) => {
        setTodoList((prev) => prev.map((todo) => todo.id === id ? {...todo, content} : content)
    )}

    const deleteTodo = (id) => {
        setTodoList((prev) => prev.filter((todo) => todo.id !== id))
    }

    return (
        <>
            <TodoList todoList={todoList} updateTodo={updateTodo} deleteTodo={deleteTodo} />
            <TodoInput addTodo={addTodo} />
        </>
    )
}

// Create
function TodoInput({addTodo}) {
    const [inputValue, setInputValue] = useState("")
    return (
        <>
            <input value={inputValue} onChange={(e) => {
                setInputValue(e.target.value)
            }}/>
            <button onClick={() => {
                const v = inputValue.trim()
                addTodo(v)
                setInputValue("")
            }}>
                추가
            </button>
        </>
    )
}

// Read
function TodoList({ todoList, updateTodo, deleteTodo }) {
    return (
        <>
            <ul>
                {todoList.map((todo) => (
                    <Todo key={todo.id} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
                ))}
            </ul>
        </>
    )
}

// Update, Delete
function Todo({todo, updateTodo, deleteTodo}) {
    const [inputValue, setInputValue] = useState("")
    return (
        <>
            <li>{todo.content}
                <input value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                <button onClick={() => {
                    if (inputValue.trim()) {
                        updateTodo(todo.id, inputValue)
                    }
                    setInputValue("")
                }}>
                    수정
                </button>
                <button onClick={() => deleteTodo(todo.id)}>삭제</button>
            </li>
        </>
    )
}


export default App
