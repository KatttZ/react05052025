import { useEffect, useRef } from "react";

export default function AutoFocusInput(props){
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current?.focus();
    },[])

    return <input ref={inputRef} {...props}/>
}