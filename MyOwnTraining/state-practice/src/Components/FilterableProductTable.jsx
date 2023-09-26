import { useState } from "react";
import productData from "../products.json";
import "../FilterableProductTable.css"
import "./SearchBar";
import SearchBar from "./SearchBar";

function FilterableProductTable() {

    // SEARCH
    const [searchContent, setSearchContent] = useState('');
    const [checkedBox, setCheckedBox] = useState(false);

    // TABLE

    const formattedProducts = {};

    for (let product of productData.products) {
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
            if (!product.name.toLowerCase().includes(searchContent.toLowerCase())){continue}
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

    return (<>
    <div className="container">
        <SearchBar search={searchContent} handleChange={(event) => setSearchContent(event.target.value)}/>
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
        </div>
    </>);
}

export default FilterableProductTable;