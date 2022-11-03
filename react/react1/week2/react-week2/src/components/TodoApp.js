import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import todos from "./todoCollections";

export default function Todo() {
  const todosList = todos;
  const [todoList, setTodoList] = useState(todosList);

  const addNewTodo = () => {
    setTodoList((current) => [
      ...current,
      { id: Math.random().toString(16).slice(2), description: "Random", deadline: "Text" },
    ]);
  };

  function handleRemove(id) {
    const NewList = todoList.filter((Todo) => Todo.id !== id);
    setTodoList(NewList);
  }

  if (todoList.length === 0) {
    alert("No Todos Left After This");
  }

  return (
    <div>
      <center>
        <div>
          <button className="addTodoButton" onClick={addNewTodo}>
            New Task
          </button>
        </div>
        {todoList.map((element) => {
          return (
            <div>
              <ul className="todos">
                <li>
                  <input type="checkbox" />
                  <span>
                    {element.description} {element.deadline}
                  </span>
                  <button
                    className="deleteButton"
                    type="button"
                    onClick={() => handleRemove(element.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </li>
              </ul>
            </div>
          );
        })}
      </center>
    </div>
  );
}
