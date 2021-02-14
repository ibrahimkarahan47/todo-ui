import React, { useState } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [text] = useState("TODOs");

  return (
    <div className="App">
      <Header text={text} />
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
