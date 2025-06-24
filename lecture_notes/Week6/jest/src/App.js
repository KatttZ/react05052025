// import Counter from "./Counter";
import CounterTwo from "./CounterTwo";
import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <div className="App">
      {/* <Counter initialCount={0} /> */}
      <CounterTwo count={count} handleIncrement={increment} handleDecrement={decrement} />
    </div>
  );
}

export default App;
