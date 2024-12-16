/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./BlogPost.css";

const BlogPost = ({ title, content, imageUrl }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const contentPreview =
    content.slice(0, 200) + (content.length > 100 ? "..." : "");

  return (
    <div className="blog-post">
      
      <img
        
        src={imageUrl}
        alt={title}
        style={{ width: "100%", height: "425px", objectFit: "cover" }}
      />
        <h2>{title}</h2>
      <p>{isExpanded ? content : contentPreview}</p>
      <button className="togglebutton"onClick={toggleReadMore}>{isExpanded ? "Read Less" : "Read More"}</button>
    </div>
  );
};

export default BlogPost;
