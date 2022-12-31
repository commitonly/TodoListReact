import './App.css';
import { useState } from 'react';
import TodoBoard from './components/TodoBoard';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);

  const addItem= ()=>{
    console.log("im here", inputValue)
    setTodoList([...todoList,inputValue])

  }

  return (
    <div>
      <input value={inputValue} type="text" onChange={(e)=>setInputValue(e.target.value)}/>
      <button onClick={addItem}>추가</button>
      <TodoBoard todoList={todoList}/>
    </div>
  );
}

export default App;
