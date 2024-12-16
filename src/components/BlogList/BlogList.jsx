/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import BlogPost from "../BlogPost/BlogPost";
import "./BlogList.css";
import staticData from "../../data";

// eslint-disable-next-line react/prop-types
const BlogList = ({ selectedCategory }) => {
  const [blogs, setBlogs] = useState([]);
  const [showDetails, setShowDetails] = useState(false); 
  useEffect(() => {
    setBlogs(staticData);
  }, []);

  // Filter blogs based on selected category
  const filteredBlogs =
    selectedCategory === "all"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails); // Toggle showDetails state
  };

  return (
    <div className="BlogList">
      {filteredBlogs.map((blog) => (
        <BlogPost
          key={blog.id}
          {...blog}
          isExpanded={showDetails} // Pass the same state to all BlogPost
          onToggle={handleToggleDetails} 
        />
      ))}
    </div>
  );
};

export default BlogList;
