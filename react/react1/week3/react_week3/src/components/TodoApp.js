import React from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used






export default function App() {
  const [todos, setTodos] = useState([])
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDeadline, setTodoDeadline] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  const fetchTodos = () => {
   return fetch("https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw")
   .then((response) => response.json())
   .then((data) => setTodos(data));
  }
  
  useEffect(() => {
   fetchTodos();
  },[])

  function handleEditInputChange(e) {
    setCurrentTodo({ ...currentTodo, description: e.target.value });
    console.log(currentTodo);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
      setTodos([
        ...todos,
        {
         description: todoTitle,
         deadline: todoDeadline,
         id: Date.now()
        }
      ]);
      setTodoTitle("")
  }
 
  function handleEditFormSubmit(e) {
    e.preventDefault();
    handleUpdateTodo(currentTodo.id, currentTodo);
  }

  function handleDeleteClick(id) {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removeItem);
  }


  function handleUpdateTodo(id, updatedTodo) {
     const updatedItem = todos.map((todo) => {
     return todo.id === id ? updatedTodo : todo;
    });
    setIsEditing(false);
    setTodos(updatedItem);
  }

  function handleEditClick(todo) {
    setIsEditing(true);
    setCurrentTodo({ ...todo });
  }

  return (
    <div className="todos">
      {isEditing ? (
        <form onSubmit={handleEditFormSubmit}>
          <label htmlFor="editTodo">Edit todo: </label>
          <input name="editTodo" type="text" placeholder="Edit todo" value={currentTodo.description} onChange={handleEditInputChange} />
          <button className="confirmEditButton" type="submit">
          <FontAwesomeIcon icon={solid('edit')} />
          </button>
          <button className="cancelButton" onClick={() => setIsEditing(false)}>
          <FontAwesomeIcon icon={solid('cancel')} />
          </button>
        </form>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <input type={'text'} placeholder="Add Todo" onChange={ (e) => setTodoTitle(e.target.value)} />
          <input type={'date'} onChange={ (e) => setTodoDeadline(e.target.value)} />
          <button className="addTodoButton" type="submit">
          <FontAwesomeIcon icon={solid ("file-circle-plus")}/>
          </button>
        </form>
      )}
      <ul className="todo-list">
        {todos.map((todo) => (
            <li className="TodoBox">
            <input type={'checkbox'}/>  
            <span>{todo.description} | {todo.deadline}</span>
            <button className="editButton" onClick={() => handleEditClick(todo)}>
            <FontAwesomeIcon icon={solid('pen')} /></button>
            <button className="deleteButton" onClick={() => handleDeleteClick(todo.id)}>
            <FontAwesomeIcon icon={solid('trash-can')} />
            </button>
           </li> 
         ))}
      </ul>
    </div>
  );
}