
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import BlogList from "./components/BlogList/BlogList.jsx";
import NavBar from '../src/components/NavBar/NavBar.jsx';
import '../src/App.css';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="App">
      <NavBar onCategoryChange={setSelectedCategory} />
      <BlogList selectedCategory={selectedCategory} />
    </div>
  );
};

export default App;
