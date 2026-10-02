import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((data) => setPosts(data));
    axios .get("https://jsonplaceholder.typicode.com/posts").then((response) => setPosts(response.data))
      
  }, [posts]);
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
        <Helmet>
        <title>Blog</title>
        </Helmet>
      {posts.map((post) => (
        <div key={post.id} className="border p-4 rounded ">
          <h2 className="font-bold  ">{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
