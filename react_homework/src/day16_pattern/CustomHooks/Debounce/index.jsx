import { useEffect, useState } from "react"


export default function useDebounce(value,delay=500){
    const [debouncedVal, setDebounceVal] = useState(value);

    useEffect(()=> {
        // every time 'value' changes, start a new timer
        const timer = setTimeout(()=>{
            setDebounceVal(value)
        },delay)

        // if 'value' changes before the delay finishes, clear the last timer
        return () => clearTimeout(timer)
    },[value,delay])

    return debouncedVal;
}


