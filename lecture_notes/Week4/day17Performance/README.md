# Performance

link for sandbox: https://codesandbox.io/p/sandbox/3ycq6s

## useMemo for value

use Cases:
useMemo	Cache expensive computed values (e.g., sorting, calculations)
1. expensive calculation
```js
import { useMemo, useState } from "react";

export default function ExpensiveCalc() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const expensiveResult = useMemo(() => {
    console.log("Running expensive calc...");
    let total = 0;
    for (let i = 0; i < 100000000; i++) {
      total += count * 2;
    }
    return total;
  }, [count]); // Recalculate only when `count` changes

  return (
    <div>
      <h2>Expensive Calculation</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Result: {expensiveResult}</p>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="This won’t trigger calculation"
      />
    </div>
  );
}
// without useMemo, every state change like input change(has nothing to do with count) would rerun the heavy calculation.
```
2. Memoized Sorted List
```js
import { useMemo, useState } from "react";

export default function SortedList() {
  const [items] = useState(["banana", "apple", "orange"]);
  const [query, setQuery] = useState("");

  const sortedItems = useMemo(() => {
    console.log("Sorting...");
    return [...items].sort();
  }, [items]);

  return (
    <div>
      <h2>Sorted List</h2>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
      />
      <ul>
        {sortedItems
          .filter((item) => item.includes(query))
          .map((item) => (
            <li key={item}>{item}</li>
          ))}
      </ul>
    </div>
  );
}
//Prevents unnecessary re-sorting when only query changes.
```

## useCallback for function

Memoize functions to prevent unnecessary re-renders, especially in children

1. prevent unnecessary re-renders in Child Components
```jsx
import { useCallback, useState } from "react";

function Child({ onClick }) {
  console.log("Child rendered");
  return <button onClick={onClick}>Click me</button>;
}

export default function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked!");
  }, []); // Stable function reference

  return (
    <div>
      <h2>useCallback Demo</h2>
      <button onClick={() => setCount(count + 1)}>Increment Parent</button>
      <p>Count: {count}</p>
      <Child onClick={handleClick} />
    </div>
  );
}
//Child won't re-render unless handleClick changes — avoids unnecessary renders.
```

2. in event handlers
```jsx
import { useCallback, useState } from "react";

export default function Form() {
  const [text, setText] = useState("");

  const handleChange = useCallback((e) => {
    setText(e.target.value);
  }, []); // Won’t re-create the function on every render

  return (
    <div>
      <h2>Form with useCallback</h2>
      <input type="text" value={text} onChange={handleChange} />
    </div>
  );
}

```