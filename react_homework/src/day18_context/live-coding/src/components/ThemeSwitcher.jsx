import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeSwitcher(){
    const {theme, toggleTheme} = useContext(ThemeContext);

    return <div>
        <p>Current theme: {theme}</p>
        <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
}