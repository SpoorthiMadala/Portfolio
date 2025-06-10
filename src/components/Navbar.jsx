import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <div className="navbar-container">
        <div className="logo">Madala Spoorthi</div>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          {links.map((link, index) => (
            <motion.a
              href={`#${link.toLowerCase()}`}
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="nav-link"
            >
              {link}
            </motion.a>
          ))}
        </div>
        <div
          className={`menu-toggle ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
