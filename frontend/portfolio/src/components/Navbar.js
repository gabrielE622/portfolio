import React from 'react';
import Button from '../custom/Button';

const Navbar = () => {

  // const handleExamsScroll = () => {
  //   const examsSection = document.getElementById("exams-section");
  //   if (examsSection) {
  //     examsSection.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  const handleExamsScroll = () => {
    const examsSection = document.getElementById("exams-section");
    if (examsSection) {
      examsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="navbar-container">
      <h1 className="navbar-h1 cursor-pointer">G</h1>
      <div className="navbar-button-container">
        <Button title="About" />
        <Button title="Projects" />
        <Button title="Contact" />
        <Button title="Resume" />
        <Button title="Exams" func={handleExamsScroll} />
      </div>
    </div>
  );
};

export default Navbar;
