import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

const Header = () => (
  <header className="navbar">
    <ul>
      <li>Home</li>
    </ul>
  </header>
);

export default CSSModules(Header, styles);
