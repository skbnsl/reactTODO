import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './component/Todo'

function App() {
  // const [count, setCount] = useState(0);

  // const handleClick = () => {
  //   console.log("button clicked");
  // };

  // const handleCounter = (count) => {
  //   setCount(count+2);
  // }

  // return (
  //   <>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => handleCounter(count)}> count is {count} </button>
  //       <button onClick={handleClick}>  </button>
  //     </div>

  //     <input type="text" onMouseEnter={()=>console.log("text field enter")} />
  //   </>
  // )

  const [todos, setTodos] = useState([]);
  const [input,setInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  return (
    <>
      <div><h2>TODO App!!</h2></div>
      <Todo/>
    </>
  )
}

export default App;
