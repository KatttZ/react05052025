import { useEffect, useState } from "react";

const URL = "https://dummyjson.com/posts";

export default function FetchPosts() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(URL);
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  const allTags = Array.from(new Set(posts.flatMap((post) => post.tags)));

  const filteredPosts = posts
    .filter((post) => post.title.toLowerCase().includes(search.toLowerCase()))
    .filter((post) => selectedTag === "" || post.tags.includes(selectedTag));

  return (
    <div>
      <h2>Fetch Posts</h2>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      <select
        name="tag"
        value={selectedTag}
        onChange={(e) => setSelectedTag(e.target.value)}
      >
        <option value="">All Tags</option>
        {allTags.map((tag) => {
          return (
            <option value={tag} key={tag}>
              {tag}
            </option>
          );
        })}
      </select>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Tags</th>
          </tr>
        </thead>

        <tbody>
          {filteredPosts.map((post) => {
            return (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.tags.join(", ")}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
