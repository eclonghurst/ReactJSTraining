import { useState } from "react";
import "../FilterableProductTable.css"
import "./SearchBar";
import SearchBar from "./SearchBar";
import StaticData from "./StaticData";
import ProductForm from "./ProductForm";

function FilterableProductTable() {

    // SEARCH
    const [searchContent, setSearchContent] = useState('');
    // const [checkedBox, setCheckedBox] = useState(false);

    return (
    <div className="container">
        <SearchBar search={searchContent} handleChange={(event) => setSearchContent(event.target.value)}/>
        <StaticData search={searchContent}/>
        <ProductForm/>
    </div>
    );
}

export default FilterableProductTable;