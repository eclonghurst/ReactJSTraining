import React, { useEffect, useState } from 'react'
import PropTypes from "prop-types";
import axios from "axios";
import productData from '../products.json';
import FilterableProductTable from './FilterableProductTable';

function StaticData(props) {

    const [products, setProducts] = useState([]);
    
    useEffect(function() {
        axios.get("http://localhost:4494/products").then(function (response){
            setProducts(response.data)
        }).catch(err => console.error(err));
    }, []);

    const formattedProducts = {};

    for (let product of products) {
        // checks if category already exists in that object
        if (formattedProducts[product.category] === undefined) {
            // assigns a new array to that category  
            formattedProducts[product.category] = [];
        }
        // adds the product to the array for its category
        formattedProducts[product.category].push(product);
    }

    console.log("formattedProducts:", formattedProducts);

    const tableData = [];

    for (let category in formattedProducts) {
        tableData.push(
            <tr>
                <th colSpan={2}>
                    {category}
                </th>
            </tr>
        );
        for (let product of formattedProducts[category]) {
            // do your search in here
            if (!product.name.toLowerCase().includes(props.search.toLowerCase())){continue}
            else {
            tableData.push(
                <tr>
                    <td>
                        {product.name}
                    </td>
                    <td>
                        {'$' + product.price}
                    </td>
                </tr>
            )
        }
    }
    }

  return (
    <>
    <table className="filterTable">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
            {tableData}
            </tbody>
        </table>
    </>
  )
}

StaticData.propTypes = {
    search: PropTypes.string.isRequired,
    // handleChange: PropTypes.func.isRequired,
}

export default StaticData;