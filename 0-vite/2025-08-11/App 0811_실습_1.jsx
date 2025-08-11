import { useState } from "react"
import './App.css'

// TODO
function App() {
    const [todoList, setTodoList] = useState([
        {id: 0, content: "밥 먹기"}
    ]);
    

    return (
        <>
            <TodoList todoList={todoList} setTodoList={setTodoList}/>
            <TodoInput todoList={todoList} setTodoList={setTodoList}/>
            <hr />
        </>
    )
}

// 리스트 추가하기 (Create)
function TodoInput({todoList, setTodoList}) {
    const [inputValue, setInputValue] = useState("")

    return (
        <>
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>

            <button onClick={() => {
                const newTodo = {id: Number(new Date()), content: inputValue}
                const newTodoList = [...todoList, newTodo]
                setTodoList(newTodoList)
                setInputValue("")
            }}>
                추가하기
            </button>
        </>
    )
}

// 전체 리스트 (Read)
function TodoList({todoList, setTodoList}) {

    return (
        <>
            <ul>
                { todoList.map((todo) => (
                    <Todo key={todo.id} todo={todo} setTodoList={setTodoList} />
                ))}
                
            </ul>
        </>
    )
}

// 개별 리스트 (Update)
function Todo({todo, setTodoList}) {
    const [inputValue, setInputValue] = useState("")

    return (
        <li>
            {/* 표시되는 리스트 */}
            { todo.content }

            {/* 리스트 수정 */}
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <button onClick={() => {
                setTodoList((prev) => {
                    return prev.map((el) => el.id === todo.id ? {...el, content: inputValue} : el )
                })
                setInputValue("")
            }}>
                수정
            </button>

            {/* 리스트 삭제 */}
            <button onClick={() => {
                setTodoList((prev) => {
                    return prev.filter((el) => el.id !== todo.id)
                })
            }}>
                삭제
            </button>
        </li>
    )
}


export default App
