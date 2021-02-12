import React, { useState } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";

function App() {
  const [text] = useState("TODOs");

  return (
    <div className="App">
      <Header text={text} />
      <TodoForm />
    </div>
  );
}

export default App;
