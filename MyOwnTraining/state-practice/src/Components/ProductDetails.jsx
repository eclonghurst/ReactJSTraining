import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';


function ProductDetails() {

    const [product, setProduct] = useState(
        {
            id: 1,
            name: "",
            price: 0,
            category: "",
        }
    )

    const params = useParams();
    console.log("PARAMS: ", params);
    const id = params.id;

    useEffect(function() {
        axios.get("http://localhost:4494/products/" + id)
        .then(res => setProduct(res.data))
        .catch(err => console.error(err));
    }, [id]);


  return (
    <div className='productDetailsContainer'>
    <table>
        <tr>
            <td colspan="2"><h2>Product Details</h2></td>
        </tr>
        <tr>
            <td>ID:</td>
            <td>{product.id}</td>
        </tr>
        <tr>
            <td>Name:</td>
            <td>{product.name}</td>
        </tr>
        <tr>
            <td>Price:</td>
            <td>{product.price}</td>
        </tr>
        <tr>
        <td>Category:</td>
        <   td>{product.category}</td>
        </tr>
    </table>
    </div>
    
  )
}

export default ProductDetails