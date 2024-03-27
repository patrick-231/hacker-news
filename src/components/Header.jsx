import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Header() {
  return (
    <div className="navbar">
      <img
        src="https://zeroheight-wordpress-uploads.s3.amazonaws.com/wp-content/uploads/2023/01/small-icon_react-2.png"
        alt="logo image"
        width={150}
        className="logo"
      />
      <div className="navbar-links">
        <ul>
          <li>
            <a href="https://legacy.reactjs.org/docs/getting-started.html" target='blank'>Documentation</a>
          </li>
          <li>
            <a href="https://legacy.reactjs.org/docs/components-and-props.html" target='blank'>Components</a>
          </li>
          <li>
            <a href="https://legacy.reactjs.org/docs/hooks-intro.html" target='blank'>Hooks</a>
          </li>
          <li>
            <a href="https://www.w3schools.com/react/react_router.asp" target='blank'>Routing</a>
          </li>
        </ul>
        <input type="text" className="styled-input" placeholder="Search topic.." />
        <button type="login">Login</button>
        
       
      </div>
    </div>
  );
}

export default Header;