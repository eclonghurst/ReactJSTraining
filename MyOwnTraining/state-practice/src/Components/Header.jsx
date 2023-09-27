import React from 'react'
import {Link} from 'react-router-dom';
import './Header.css';

function Header() {

  return (
    <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/createProduct">Add Product</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
          </ul>
    </nav>
  )
}

export default Header