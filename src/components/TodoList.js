import React from "react";

import Todo from "./Todo";

function TodoList({ todos, removeTodo, toggleDone }) {
  return (
    <ul>
      {(todos || []).map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          toggleDone={toggleDone}
        />
      ))}
    </ul>
  );
}

export default TodoList;
