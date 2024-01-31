import React from 'react';

const NavigationBar = () => {
  return (
    <nav className="navigation-bar">
      <div className="logo">Recipe Platform</div>
      <div className="menu">
        <a href="/">Home</a>
        <a href="/add">Add Recipe</a>
        <a href="/about">About</a>
      </div>
    </nav>
  );
};

export default NavigationBar;
