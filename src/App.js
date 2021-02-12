import React, {useState} from 'react';
import Header from './components/Header';

function App() {
  const [text] = useState("TODOS");
  return (
    <div className="App">
      <Header
        text={text}
      />
    </div>
  );
}

export default App;
