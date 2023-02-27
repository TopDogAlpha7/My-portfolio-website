import React from 'react';
import './Navbar.css'


function Header() {
  return (
    <header className='header'>
      <div className="header-content">
        <nav>
          <ul>
            <li><h1><a href="#about">About Me</a></h1></li>
            <li><h1><a href="#project">Projects</a></h1></li>
            <li><h1><a href="#contact">Contact</a></h1></li>
          </ul>
          <h1>Welcome</h1>
        <p >My name is Tinodaishe Simbanegavi<br/> I am a self-taught full-stack developer from Johannesburg, South Africa</p>
        </nav>
      </div>
    </header>
  );
}

export default Header;
