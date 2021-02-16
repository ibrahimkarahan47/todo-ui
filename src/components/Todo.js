import React from "react";

function Todo({ todo, removeTodo, toggleDone }) {
  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  function handleCheckboxClick() {
    toggleDone(todo.id);
  }

  return (
    <div style={{ display: "flex" }}>
      <input type="checkbox" onClick={handleCheckboxClick} />
      <li style={{ textDecoration: todo.done ? "line-through" : null }}>
        {todo.task}
      </li>
      <button onClick={handleRemoveClick}>X</button>
    </div>
  );
}

export default Todo;
