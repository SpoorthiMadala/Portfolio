import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Madala Spoorthi. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
