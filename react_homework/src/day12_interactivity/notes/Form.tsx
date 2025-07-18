import {useState} from 'react';

export default function Form() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("mario");

    const handleSubmit = (e:any) => {
        e.preventDefault();
        const blog = {title, body, author};
        console.log(blog);

    }

    return <div>
        <form onSubmit={handleSubmit}>
            <label>Blog title:</label>
            <input 
                type="text" 
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <label>Blog body:</label>
            <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
            >

            </textarea>
            <label>Blog author:</label>
            <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            >
                <option value="mario">mario</option>
                <option value="yoshi">yoshi</option>
            </select>
            <button type="submit">Add Blog</button>
            <p>{title}</p>
            <p>{body}</p>
            <p>{author}</p>
        </form>
    </div>
}
