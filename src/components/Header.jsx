import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const links = [
    { text: 'Sobre', href: '#' },
    { text: 'Instagram', href: '#' },
    { text: 'Delivery', href: '#' },
    { text: 'WhatsApp', href: '#' },
    { text: 'Contato', href: '#' },
  ];

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <nav className="container">
        <a href="#" className="logo">
          Mira'<span>s</span> Pizzaria.
        </a>
        <div className="links">
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="nav-link">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
