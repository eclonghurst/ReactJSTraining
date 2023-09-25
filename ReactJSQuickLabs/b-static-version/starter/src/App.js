import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'popper.js';
import 'jquery';
import './Components/css/qa.css';

import Header from './Header';
import Footer from './Footer';
import AllTodos from './Components/AllTodos';

function App() {
  return (
    <div className="container">
      <div className="container">
        <Header/>
        <div className='container'>
          <AllTodos/>
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
