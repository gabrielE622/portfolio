import React from 'react';
import Button from '../custom/Button';

const Navbar = () => {
  const handleAboutMeScroll = () => {
    const econtactSection = document.getElementById("about-me-section");
    if (econtactSection) {
      econtactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExamsScroll = () => {
    const examsSection = document.getElementById("exams-section");
    if (examsSection) {
      examsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleContactScroll = () => {
    const econtactSection = document.getElementById("contact-section");
    if (econtactSection) {
      econtactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="navbar-container">
      <h1 className="navbar-h1 cursor-pointer">G</h1>
      <div className="navbar-button-container">
        <Button title="About" func={handleAboutMeScroll}/>
        <Button title="Contact" func={handleContactScroll}/>
        <Button title="Exams" func={handleExamsScroll} />
      </div>
    </div>
  );
};

export default Navbar;
