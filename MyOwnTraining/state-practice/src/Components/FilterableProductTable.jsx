import { useState } from "react";
import productData from "../products.json";
import "../FilterableProductTable.css"
import "./SearchBar";
import SearchBar from "./SearchBar";
import StaticData from "./StaticData";

function FilterableProductTable() {

    // SEARCH
    const [searchContent, setSearchContent] = useState('');
    const [checkedBox, setCheckedBox] = useState(false);

    return (
    <div className="container">
        <SearchBar search={searchContent} handleChange={(event) => setSearchContent(event.target.value)}/>
        <StaticData search={searchContent}/>
    </div>
    );
}

export default FilterableProductTable;