import './App.css';
import {useSelector, useDispatch} from "react-redux"
import {increment} from "./actions/action"
import {decrement} from "./actions/action"

function App() {

const counter = useSelector(state => state)
const dispatch = useDispatch()
let inpt = "gfgf"
let show

return (
  <div className="App">
    <h1>hello {counter}</h1>
    <button onClick={() => dispatch(increment())}>+</button>
    <button onClick={() => dispatch(decrement())}>-</button>
    <input type="text" ref={val => inpt = val}></input>
    <button onClick={() => { alert(inpt.value) }}>Show</button>
    <p>{inpt.value}</p>
  </div>
);
}

export default App;
