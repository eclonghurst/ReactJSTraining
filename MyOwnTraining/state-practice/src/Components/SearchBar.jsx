import { useState } from "react";
import productData from "../products.json";
import "../FilterableProductTable.css"
import React from 'react'
import PropTypes from "prop-types";

SearchBar.propTypes = {
    handleChange: PropTypes.func.isRequired,
    search: PropTypes.string.isRequired,
}


function SearchBar(props) {

  return (
    <>
    <h2>Product Table</h2>
        <input onChange={props.handleChange} value={props.searchContent} placeholder="Search..." />
        <br />
        <label htmlFor="inStock">Only show products in stock <input type="checkbox" id="inStock" /></label>
    </>
  )
}

export default SearchBar;