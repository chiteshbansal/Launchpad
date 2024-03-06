import React, { useState, useEffect } from "react";
import { fetchPosts } from "../services/postService";
import BlogCard from "./BlogCard";
import Header from "./Header";

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (error) {
        setError(error.message);
      }
    };

    getPosts();
  }, []);

  if (error) {
    return <div>Error loading posts: {error}</div>;
  }

  return (
    <>
      {/* Top header */}
      <Header />

      {/* Blog posts */}
      <div className="p-strip is-shallow">
        <div className="row">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogPosts;
