import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav class="container">
        <a href="#" className="logo">
          Mira'<span>s</span> Pizzaria.
        </a>
        <div className="links">
          <ul>
            <li>
              <a href="#" className="nav-link">
                Sobre
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Delivery
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                WhatsApp
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Contato
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
