import React, { useState } from 'react';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('#home'); // Default active tab

  const handleClick = (tab) => {
    setActiveTab(tab); // Update the active tab
  };

  return (
    <div className="topnav">
      <a
        href="#home"
        className={activeTab === '#home' ? 'active' : ''}
        onClick={() => handleClick('#home')}
      >
        Home
      </a>
      <a
        href="#news"
        className={activeTab === '#news' ? 'active' : ''}
        onClick={() => handleClick('#news')}
      >
        News
      </a>
      <a
        href="#contact"
        className={activeTab === '#contact' ? 'active' : ''}
        onClick={() => handleClick('#contact')}
      >
        Contact
      </a>
      <a
        href="#about"
        className={activeTab === '#about' ? 'active' : ''}
        onClick={() => handleClick('#about')}
      >
        About
      </a>
    </div>
  );
};

export default Navbar;