import { useRef, useState } from "react";
import AutoFocusInput from "./AutoFocusInput";



export default function LoginForm(){
    const passwordRef = useRef(null);
    const [form, setForm] = useState({username:'', password:''});

    const handleChange = (e) => {
        setForm({...form, [e.target.name]:e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Logging in as ${form.username}`)
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <label>Username:</label>
            <AutoFocusInput
                name="username"
                type="text"
                value={form.username}
                onChange={handleChange}
                placeholder="Enter username"
            />

            <label>Password:</label>
            <input
                ref={passwordRef}
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter password"
            />

            <button type="submit">Login</button>
        </form>
    </div>
}