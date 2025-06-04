# Context & useReducer

## Context API

Tool to manage state globally without passing props down manually at every level (props drilling)

Like a global state container (but lighter than redux) It lets you share data (like user info, themes) across your component tree without manually passing it through props.

3 Main Steps:

1.  Create the Context

```js
import { createContext } from "react";
export const ThemeContext = createContext();
// This create a Context object you'll use to wrap and access state
```

2.  Create a Provider Component
    This is where you keep the state and functions that you want to share.

```js
//ThemeProvider.js
import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    //value holds the shared state and any functions
    //wrap entire app (or a section of it) in this provider
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

3. UseContext in Child Components
can access that context anywhere with the useContext hook
```js
import {useContext} from 'react';
import {ThemeContext} from './ThemeContext';

const ThemeSwitcher = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return <div>
        <p>Current theme: {theme}</p>
        <button onClick={toggleTheme}></button>
    </div>
}
```

Putting together in app.js
```js
import React from 'react';
import { ThemeProvider } from './ThemeProvider';
import ThemeSwitcher from './ThemeSwitcher';

function App() {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
      {/* other components that can now access ThemeContext */}
    </ThemeProvider>
  );
}

export default App;
```


## useReducer

## Context used together with useReducer
