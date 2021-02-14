import React, { useState } from "react";
const { v4: uuidv4 } = require("uuid");

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    done: false,
  });

  function handleInputChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuidv4() });
      setTodo({ ...todo, task: "" });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="todo"
        type="text"
        value={todo.task}
        onChange={handleInputChange}
      ></input>
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
