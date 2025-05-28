import { useEffect, useState } from "react";

export default function AutoFetchPosts() {
  const [postId, setPostId] = useState(1);
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  // Fetch post whenever postId changes
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        if (!res.ok) throw new Error("Post not found");

        const data = await res.json();
        setPost(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setPost(null);
      }
    };

    fetchPost();
  }, [postId]);

  // Set up interval to auto-increment postId every 10 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setPostId((prevId) => prevId + 1);
    }, 10000); // 10 seconds

    return () => clearInterval(intervalId); // cleanup on unmount
  }, []);

  // Stop the interval if post not found
  useEffect(() => {
    if (error === "Post not found") {
      // Stop all intervals
      // Clear all intervals (safe way since we don't store ID in ref)
      let id = window.setInterval(() => {}, 0);
      while (id--) window.clearInterval(id);
    }
  }, [error]);

  return (
    <div>
      <h2>Auto-Fetch Posts</h2>
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : post ? (
        <div>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <small>Post ID: {post.id}</small>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
