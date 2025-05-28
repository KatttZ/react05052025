import { useState } from "react"

export default function Timer() {
    const [count, setCount] = useState(0);
    const [intervalId, setIntervalId] = useState(null);
    const [isRunning, setIsRunning] = useState(false);

    const handleStart = () => {
        if(isRunning) return;

        const interval = setInterval(()=>{
            setCount(c => c + 1)
        },1000)
        setIntervalId(interval);
        setIsRunning(true);
    }

    const handlePause = () => {
        clearInterval(intervalId)
        setIsRunning(false);
    }

    const handleReset = () => {
        clearInterval(intervalId);
        setCount(c => 0)
        setIsRunning(false);
    }

    return <div>
        <h2>Count:{count} </h2>
        <button onClick={handleStart} disabled={isRunning}>Start</button>
        <button onClick={handlePause} disabled={!isRunning}>Pause</button>
        <button onClick={handleReset} disabled={count ===0 && !isRunning}>Reset</button>
    </div>
} 