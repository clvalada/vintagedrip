//Blog.js

import React from "react";
import Posts from "./Posts";


const Blog = () => {
  return (
    <div>
        <h1>Stay tuned for the Vintage Drip fasion blog.</h1>
        <Posts Blog={Blog} />
    </div>
  );
};

export default Blog;
