//Blog.js

import React from "react";
import BlogPost from "./BlogPost"; // Assuming you have a BlogPost component

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "First Blog Post",
      content: "This is the content of the first blog post.",
    },
    {
      id: 2,
      title: "Second Blog Post",
      content: "This is the content of the second blog post.",
    },
    // Add more blog posts as needed
  ];

  return (
    <div>
      <h1>Blog</h1>
      <div>
        {blogPosts.map((post) => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
