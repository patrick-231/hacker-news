import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Header() {
  return (
    <div className="navbar">
      <img
        src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*y6C4nSvy2Woe0m7bWEn4BA.png"
        alt="logo image"
        width={150}
        className="logo"
      />
      <div className="navbar-links">
        <ul>
          <li>
            <a href="#">Documentation</a>
          </li>
          <li>
            <a href="#">Components</a>
          </li>
          <li>
            <a href="#">Hooks</a>
          </li>
          <li>
            <a href="#">Routing</a>
          </li>
        </ul>
        <input type="text" className="styled-input" placeholder="Search topic.." />
        <button type="login">Login</button>
        
       
      </div>
    </div>
  );
}

export default Header;