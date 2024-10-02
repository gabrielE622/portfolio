import React from 'react';
import Button from '../custom/Button';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <h1 className="navbar-h1 cursor-pointer">G</h1>
      <div className="navbar-button-container">
        <Button title="About" />
        <Button title="Projects" />
        <Button title="Contact" />
        <Button title="Resume" />
        <Button title="Exams" />
      </div>
    </div>
  );
};

export default Navbar;
