import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from './ThemeProvider';
import { Sun, Moon, ChevronDown, Award, Shield, Copyright, Globe, Layers, TreeDeciduous } from 'lucide-react';
import { FaTrademark } from "react-icons/fa6";

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const services = [
    { name: 'Patent', path: '/services/patent', icon: <Shield size={16} /> },
    { name: 'Trademark', path: '/services/trademark', icon: <FaTrademark size={16} /> },
    { name: 'Industrial Design', path: '/services/industrial-design', icon: <Layers size={16} /> },
    { name: 'Copyright', path: '/services/copyright', icon: <Copyright size={16} /> },
    { name: 'Geographical Indication', path: '/services/geographical-indication', icon: <Globe size={16} /> },
    { name: 'Plant Variety Protection', path: '/services/plant-protection', icon: <TreeDeciduous size={16} /> }
  ];

  const handleLinkClick = () => {
    setIsMobileOpen(false);
    setIsDropdownActive(false);
  };

  return (
    <header className="header">
      <div className="container nav-container">
      <NavLink to="/" className="logo" onClick={handleLinkClick}>
        <img src="/favicon.png" alt="Genuiin Logo" className="logo-icon" />
        <div className="logo-text">
          Genuiin <span>IP</span>
        </div>
      </NavLink>

        <nav>
          <ul className={`nav-links ${isMobileOpen ? 'active' : ''}`}>
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                onClick={handleLinkClick}
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                onClick={handleLinkClick}
              >
                About Us
              </NavLink>
            </li>
            
            {/* Services Dropdown */}
            <li 
              className={`dropdown-container ${isDropdownActive ? 'active' : ''}`}
              onClick={() => setIsDropdownActive(!isDropdownActive)}
            >
              <span className="nav-item" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                Services <ChevronDown size={14} style={{ transform: isDropdownActive ? 'rotate(180deg)' : 'none', transition: 'transform var(--transition-fast)' }} />
              </span>
              <ul className="dropdown-menu">
                {services.map((service) => (
                  <li key={service.name}>
                    <NavLink 
                      to={service.path} 
                      className="dropdown-link"
                      onClick={handleLinkClick}
                    >
                      {service.icon}
                      {service.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <NavLink 
                to="/training" 
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                onClick={handleLinkClick}
              >
                Training
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/helpline" 
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                onClick={handleLinkClick}
              >
                Helpline
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/career" 
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                onClick={handleLinkClick}
              >
                Career
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                onClick={handleLinkClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button 
            onClick={toggleTheme} 
            className="theme-toggle"
            aria-label="Toggle dark/light theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <button 
            className="hamburger" 
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle navigation menu"
          >
            <span style={{ transform: isMobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
            <span style={{ opacity: isMobileOpen ? 0 : 1 }}></span>
            <span style={{ transform: isMobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
          </button>
        </div>
      </div>
    </header>
  );
};
