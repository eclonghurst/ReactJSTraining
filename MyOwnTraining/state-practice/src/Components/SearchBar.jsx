// import React, { useState } from 'react'
// import stockData from "./stock.json";

// function SearchBar() {

// // SEARCH BAR

// const [searchContent, setSearchContent] = useState('');
// const [checkedBox, setCheckedBox] = useState(false);

// const [searchedStock, setSearchedStock] = useState([]);

// const handleInput = (event) => {
//     const searchValue = event.target.value;
//     setSearchContent(searchValue);

//     // const filteredStock = stockList.filter((searchContent) => searchContent.toLowerCase().includes(searchValue.toLowerCase()));
//     // setSearchedStock(filteredStock);
// }

// const handleCheckBox = (event) => {
//     setCheckedBox(!checkedBox) 
// }

// const stockList = {};

// const tableData = [];

// for (let category in formattedStockList) {
//     tableData.push(
//         <tr>
//             <th colSpan={2}>
//                 {category}
//             </th>
//         </tr>
//     )
//     for (let product of formattedStockList[category]){

//     }
// }


//   return (
//     <>
//     <input onChange={handleInput} type="text" value={searchContent} placeholder='Search...'/>
//     <p><input onChange= {handleCheckBox} type="checkbox" name="" id="" />Only show products in stock</p>
//     <table>
//         <thead>
//         <tr>
//             <th>Name</th>
//             <th>Price</th>
//         </tr>
//         </thead>
//         <tbody>
//         {tableData}
//         </tbody>
//     </table>
//     </>
//   )
// }

// export default SearchBar