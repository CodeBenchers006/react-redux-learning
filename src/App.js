import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./store/store";

function App() {

  const counter = useSelector((state)=>state.counter)
  const dispatch = useDispatch();

  const increment=()=>{
      dispatch(actions.increment())
  }

  const decrement=()=>{
    dispatch(actions.decrement())
  }

  return (
    <div className="App" style={{textAlign:"center", padding:"10%"}}>
      <h1>Counter App</h1>
      <h4>{counter}</h4>
      <button className="btn btn-success " onClick={increment}>Increment</button>
      <button className="btn btn-danger" onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
