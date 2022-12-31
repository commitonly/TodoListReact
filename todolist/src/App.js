import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const addItem= ()=>{
    console.log("im here", inputValue)

  }
  return (
    <div>
      <input value={inputValue} type="text" onChange={(e)=setInputValue(e.target.value)}/>
      <button onClick={addItem}>추가</button>
    </div>
  );
}

export default App;
