import React from "react";
import {useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
// import { seconds } from "./TodoTimer";

const todos = [
{id: 1, description: "Get out of bed", deadline: "Wed Sep 13 2017" }, 
{id: 2, description: "Brush teeth", deadline: "Thu Sep 14 2017"}, 
{id: 3, description: "Eat breakfast", deadline: "Fri Sep 15 2017" },
{id: 4, description: "Eat launch", deadline: "Fri Sep 16 2017" }
];


export default function Todo() {
  
  const [TodoList, addTodo] = useState(todos);

  const addNewTodo = () => {
    addTodo(current => [...current, 
      {id: TodoList.length + 1, description: 'Random', deadline: 'Text'}
    ]);
  };

  function handleRemove(id) {
    const NewList = TodoList.filter(Todo => Todo.id !== id)
        addTodo(NewList)
  }


  if(TodoList.length === 0) {
    alert("No Todos Left")
  }

  return (
    <div>
      <center>
      <div>

        <button className="addTodoButton" onClick={addNewTodo}>New Task</button>
      </div>
    {

    TodoList.map((element) => {
        return (
          <div>
            <ul className="todos">
              <li>
            <input type="checkbox" />
             <span>{element.description} {element.deadline}</span> 
             <button className="deleteButton" type="button" onClick={() => handleRemove(element.id)}>
         <FontAwesomeIcon icon={faTrash} />
          </button>
               </li>
              </ul>
          </div>
        );
      })}

   {/* <div className="Timer">
     <p>You have used {seconds} seconds on the website</p> 
   </div> */}
 

      </center>
    </div>
    );
  }



