import { useState } from "react";



export default function PostList() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    setPosts(data.slice(0,10))
  };

    // function fetchPosts() {
    //     fetch("https://jsonplaceholder.typicode.com/posts")
    //         .then(res => res.json())
    //         .then(data => {
    //             const posts = data.slice(0,10);
    //             setPosts(posts)
    //         })
    // }

  return <div>
    <h3>Random Posts</h3>
    <button onClick={fetchPosts}>Load Posts</button>

    <ul>
        {posts.map(post => <li key={post.id}>{post.title}</li>)}
    </ul>
  </div>
}
