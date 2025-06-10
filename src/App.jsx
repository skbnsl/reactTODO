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
  const [inputValue,setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleAddTodo = () => {
      if(inputValue.trim() == "") return;
      if(editIndex!==null){
        const updatedTodo = todos.map((todo,index) => 
              index === editIndex ? {text:inputValue, completed:false} : todo);
        setTodos(updatedTodo);
        setEditIndex(null);
      } else {
         setTodos([...todos, {text:inputValue, completed:false}]);
      }
      setInputValue("");
  }

  const handleDeleteTodo = (index) => {
    const updateTodos = todos.filter((_,i) => i != index);
    setTodos(updateTodos);
  }

  const handleEditTodo = (index) => {
    setInputValue(todos[index].text);
    setEditIndex(index);
  }

  const toggleCompleted = (index) => {
    const updatedTodo = todos.map((todo,i) => 
      i===index ? {...todo, completed:!todo.completed} : todo
    );
    setTodos(updatedTodos);
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  return (
    <>
      <div style={{padding : "20px"}}>
        <h1>TODO App!!</h1>

        <input type='text' value={inputValue} onChange={handleInputChange} 
            placeholder='Add a Todo'/>

        <button onClick={handleAddTodo}>
            {editIndex === null ? "Add Todo" : "Update Todo"}
        </button>

      <ul>
            {todos.map((todo,index) => (
                <li key={index}>  
                    {todo.text}
                    <div>
                      <button onClick={()=>handleEditTodo(index)}> Edit </button>
                      <button onClick={()=>handleDeleteTodo(index)}> delete </button>
                    </div>
                 </li>
            ))}
      </ul>

      

      </div>
      <Todo/>
    </>
  )
}

export default App;
