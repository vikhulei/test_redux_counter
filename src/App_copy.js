import './App.css';
import {createStore} from "redux";
import {useSelector, useDispatch} from "react-redux"
import {increment} from "./actions_copy"
import {decrement} from "./actions_copy"
import counterReducer from "./reducers_copy/counter"

function App() {
  
const counter = useSelector(state => state.counter)
const isLogged = useSelector(state => state.isLogged )
const dispatch = useDispatch()

return (
  <div className="App">
    <h1>hello {counter}</h1>
    {isLogged ? <h3>You are logged!</h3> : ""}
    <button onClick={() => dispatch(increment())}>+</button>
    <button onClick={() => dispatch(decrement())}>-</button>
  </div>
);
}

export default App;
