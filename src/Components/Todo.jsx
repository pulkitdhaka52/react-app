import React, { useState } from "react";

export default function Todo() {
  const [data, setData] = useState([]);
  const [currentTodo, setCurrentTodo] = useState("");

  const addTodoList = () => {
    if (currentTodo.trim() === "") return; // prevent empty todos
    setData([...data, currentTodo]);
    setCurrentTodo("");
  };

  const removeTodo = (toRemove) => {
    setData(data.filter((item) => item !== toRemove));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        name="list"
        value={currentTodo}
        onChange={(e) => setCurrentTodo(e.target.value)}
      />
      <button onClick={addTodoList}>Add</button>

      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button onClick={() => removeTodo(item)} style={{ marginLeft: "10px" }}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
