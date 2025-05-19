import { useState } from "react";

export default function Button() {
  const [showText, setShowText] = useState(false);
  const [isHovered, setIsHovered] = useState(false);


  return (
    <div>
      <button 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      disabled={isHovered}
      >
        {isHovered ? "Disabled on hover" : "Hover to disable"}
      </button>
      <button
      onClick={() => {
        setShowText(!showText)
      }}
      >Show/Hide</button>
      {showText ? <h1>Hello World</h1> : null}
    </div>
  );
}
