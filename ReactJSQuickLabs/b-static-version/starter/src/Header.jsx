import React from "react";
import logo from './Components/images/qalogo.svg';

function Header() {
  return (
    <header>
        <nav className="navbar navbar-expand-sm">
            <a href="http://www.qa.com" className="navbar-brand" target="_blank" rel="noreferrer"><img src={logo} style={{width: '100px'}}></img></a>
            <a href="/"><h1>Todo App</h1></a>
        </nav>
    </header>
  )
}

export default Header