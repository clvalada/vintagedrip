//Blog.js

import React from "react";
import BlogPost1 from "../blog/BlogPost1"
import BlogPost90sSports from "../blog/BlogPost90sSports.js"

const Blog = () => {
    return (
      <div className="blog-container">
        <div className="blogpost">
          <BlogPost1 />
        </div>
        <div className="line"></div>
        <div className="blogpost">
          <BlogPost90sSports />
        </div>
      </div>
    );
  };

  export default Blog;