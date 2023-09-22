import { useState } from "react"; //Step1: We import this hook from react library
import "../src/App.css";

function App() {

  /* useState(10) is taking value as 10 and returning
  two arrays, in count we will get the default 10 value
  and with help of setCount() function we manipulate
  the count value */
  let [count, setCount] = useState(10);


  let increase = function () {
    count < 20 ? setCount(++count) : alert("cannot exceed above 20");
  };

  let decrease = function () {
    count > 0 ? setCount(--count) : alert("cannot decrement below 0");
  };

  return (
    <div className="container">
      <h1>{count}</h1>

      <button onClick={increase}>Add number</button>
      <button onClick={decrease}>Remove number</button>
    </div>
  );
}

export default App;
