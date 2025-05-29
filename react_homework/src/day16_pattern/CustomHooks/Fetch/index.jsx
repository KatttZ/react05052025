import useFetch from './useFetch'

export default function FetchPost() {
  const { data, isLoading, isError } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {isError.message}</p>;

  return (
    <div>
      <h2>useFetch</h2>
      {data?.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}{" "}
    </div>
  );
}
