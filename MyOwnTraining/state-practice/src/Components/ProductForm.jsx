import React, { useState } from 'react'
import axios from "axios";
import '../FilterableProductTable.css'

function ProductForm(props) {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = function (event) {
        event.preventDefault();

        axios.post("http://localhost:4494/products", {
            name, price, category
        }).then(function (res) {
            console.log("RES", res);
            alert("Successful addition of: " + name)
            // so the form resets
            setName("");
            setPrice(0);
            setCategory("");
            props.getProducts();
        }).catch(err => console.error(err))

    }

  return (
    <form className="productForm" onSubmit={handleSubmit}>
        <label htmlFor='productName'>Product Name: </label>
        <input type="text" id='productName' value={name} onChange={e => setName(e.target.value)}/>
        <label htmlFor='productPrice'>Price: </label>
        <input type="text" id='productPrice' value={price} onChange={e => setPrice(e.target.value)}/>
        <label htmlFor='productCategory'>Category: </label>
        <input type="text" id='productCategory' value={category} onChange={e => setCategory(e.target.value)}/>
        <button className="submitProductButton" type="submit">CREATE</button>
    </form>
  )
}

export default ProductForm