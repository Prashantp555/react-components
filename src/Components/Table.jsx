import React, { useState } from "react";
import { tableData } from "../constant/tableData";

const Table = () => {
    const [checked, setChecked] = useState(false);
    const handleClick = () => {
        setChecked(!checked);
    }
    return (
        <div>
            <div>
                <span>Show Available Products</span>
                <input type = "checkbox" onClick={() => handleClick()}/>
            </div>
        <table>
            <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
            </tr>
            {checked && tableData && tableData.map((product, index) => (
                product.stocked && (<tr key = {product.name}>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.price}</td>
                </tr>)
            ))}
            {!checked && tableData && tableData.map((product, index) => (
                <tr key = {product.name}>
                    <td>{product.name}</td>
                    <td>{product.category}</td>
                    <td>{product.price}</td>
                </tr>
            ))}

        </table>
        </div>
        
    )
}

export default Table;