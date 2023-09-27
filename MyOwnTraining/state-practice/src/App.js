import logo from './logo.svg';
import './App.css';
import InputWriter from './Components/InputWriter';
import Counter from './Components/Counter';
import SearchBar from './Components/SearchBar';
import FilterableProductTable from './Components/FilterableProductTable';
import ProductForm from './Components/ProductForm';
import Header from './Components/Header';
import ProductDetails from './Components/ProductDetails';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";


function App() {
  return ( 
    <>
    <Router>
      <div className='App'>
        <Header/>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>}/>
        <Route path="/counter" element={<Counter/>}/>
        <Route path="/products" element={<FilterableProductTable/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
        <Route path="/createProduct" element ={<ProductForm/>}/>
      </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
