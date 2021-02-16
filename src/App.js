import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import TodoLogic from "./logic/todo";
import TodoServiceCaller from "./service-callers/todo";

function App() {
  const [text] = useState("TODOs");
  const [todos, setTodos] = useState([]);

  const serviceCaller = new TodoServiceCaller();

  useEffect(() => {
    serviceCaller
      .getTodos()
      .then((response) => {
        setTodos(response.data.todos);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  function addTodo(todo) {
    serviceCaller
      .addTodo({ todo })
      .then((response) => {
        if (response.data.success) {
          setTodos([...todos, todo]);
        } else {
          console.error(response.data.error);
        }
      })
      .catch((error) => {
        console.error(error.message);
      });
  }

  function toggleDone(id) {
    serviceCaller
      .updateTodo({ id })
      .then((response) => {
        if (response.data.success) {
          setTodos(TodoLogic.updateTodo({ todo: response.data.todo, todos }));
        } else {
          console.error(response.data.error);
        }
      })
      .catch((error) => {
        console.error(error.message);
      });
  }

  function toggleDone(id) {
    serviceCaller
      .updateTodo({ id })
      .then((response) => {
        if (response.data.success) {
          setTodos(
            TodoLogic.updateTodo({
              id: response.data.todo.id,
              todo: response.data.todo,
              todos,
            })
          );
        } else {
          console.error(response.data.error);
        }
      })
      .catch((error) => {
        console.error(error.message);
      });
  }

  function removeTodo(id) {
    serviceCaller
      .removeTodo({ id })
      .then((response) => {
        if (response.data.success) {
          setTodos(TodoLogic.removeTodo({ id, todos }));
        } else {
          console.error(response.data.error);
        }
      })
      .catch((error) => {
        console.error(error.message);
      });
  }

  return (
    <div className="App">
      <Header text={text} />
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleDone={toggleDone} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
