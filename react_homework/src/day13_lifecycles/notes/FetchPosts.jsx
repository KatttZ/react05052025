import { useEffect, useState } from "react";

export default function FetchPosts() {
  const [post, setPost] = useState(null);
  const [postId, setPostId] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        if (!res.ok) {
          throw new Error("Post not found");
        }
        const data = await res.json();
        setPost(data);
      } catch (err) {
        setPost(null);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPost();
  }, [postId]);

  const handlePrevButton = () => {
    if (postId > 1) {
      setPostId((id) => id - 1);
    }
  };

  const handleNextButton = () => {
    setPostId((id) => id + 1);
  };

  return (
    <div>
      <h2>fetch posts</h2>
      <button onClick={handlePrevButton} disabled={postId === 1}>Prev</button>
      <button onClick={handleNextButton}>Next</button>
      {isLoading && <div>Loading...</div>}
      {post && (
        <div>
          <p>{post.id}</p>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
}
