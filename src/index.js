import React, { useState ,useEffect, useRef} from "react";
import ReactDOM from "react-dom/client";
function Favoritenum() {
  const [num, setnum] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [calculation, setnum1] = useState(0);
  const count= useRef(0);
  const [count1, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation1 = expensiveCalculation(count1);
  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };
  useEffect(() => {
    setnum1(() => num * 2);
  }, [num]);
  useEffect(() => {
    count.current = count.current + 1;
  });
  return (
    <>
      <h1>Which you select ? {num}</h1>
      <button
        type="button"
        onClick={() => setnum("1")}
      >1</button>
      <button
        type="button"
        onClick={() => setnum("2")}
      >2</button>
      <button
        type="button"
        onClick={() => setnum("3")}
      >3</button>
      <button
        type="button"
        onClick={() => setnum("4")}
      >4</button>
      <p>Count: {num}</p>
      <p>Calculation: {calculation}</p>
      <h1>{`you selected ${num}!`}</h1>
      <Component2 user={num} />
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
      <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count1}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation1}
      </div>
    </div>
    </>
   
  );
  
}   
function Component2({ user }) {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 user={user} />
    </>
  );
}

function Component3({ user }) {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 user={user} />
    </>
  );
}

function Component4({ user }) {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 user={user} />
    </>
  );
}

function Component5({ user }) {
  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}
const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Favoritenum/>);
