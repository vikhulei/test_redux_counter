import './App.css';
import React, {useState, useEffect} from "react"

function App() {

const [counter, setCounter] = useState(0)

const increment = () => {
  setCounter(counter + 1)
}

const decrement = () => {
  setCounter(counter - 1)
}

return (
  <div className="App">
    <button onClick={(() => setCounter(counter+1))}>+</button>
    <h1>{counter}</h1>
    <button onClick={(() => setCounter(counter - 1))}>-</button>
  </div>
);
}

export default App;
