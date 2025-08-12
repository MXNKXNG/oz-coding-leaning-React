import { useState } from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Main from "./page/Main";
import Detail from "./page/Details";
import Search from "./page/Search";

function App() {
  const [inputValue, setInputValue] = useState("")
  const navigate = useNavigate()
  return (
    <>
      <header>
        <h1>💚 동물 조아 💚</h1>
        <input value={inputValue} onChange={(e) => {
          setInputValue(e.target.value)
        }}/>
        <button onClick={() => {
          navigate(`/search?animal=${inputValue}`)
        }}>검색</button>
      </header>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/search" element={<Search />} />
      </Routes>


      <footer>all rights reserved to OZ</footer>
    </>
  );
}





export default App;
