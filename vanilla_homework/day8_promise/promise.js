export const fetchPosts = async () => {
  //fetch posts from "https://jsonplaceholder.typicode.com/posts"
  //return the posts
  const url = "https://jsonplaceholder.typicode.com/posts";
  try{
    const response = await fetch(url);
    if(!response.ok){
      throw new Error(`Response status: ${response.status}`)
    }
    const posts = await response.json();
    console.log(posts)
  }catch(error){
    console.error(error.message )
  }
};

export const fetchPostById = async (id) => {
  //fetch a post by id from "https://jsonplaceholder.typicode.com/posts/${id}"
  //return the post
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    if (!response.ok) {
      throw new Error("Post not found");
    }
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(`Promise failed: ${err.message}`);
  }
};

export const sequentialPromise = async (promises, order) => {
  //execute promises sequentially
  //return the results in the order specified
  //if there is a rejected promise, throw an error, and stop executing the rest of the promises
  //Example:
  //order = [2,1,3]
  //promises = ["data1", "data2", "data3"]
  //results = ["data2", "data1", "data3"]
  const results = [];

  try {
    for (let i = 0; i < order.length; i++) {
      const index = order[i] - 1; // Convert 1-based to 0-based index
      const result = await promises[index](); // 👈 Call the promise function
      results.push(result);
    }
    return results;
  } catch (err) {
    throw new Error(`Promise failed: ${err.message}`);
  }
};
