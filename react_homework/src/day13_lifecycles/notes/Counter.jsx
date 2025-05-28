import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    return () => {
      if (intervalId !== null) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  const handleStart = () => {
    if (intervalId !== null) return;

    const interval = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    setIntervalId(interval);
  };

  const handleStop = () => {
    if (intervalId !== null) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };
  return (
    <div>
      <h3>counter: {count}</h3>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}
