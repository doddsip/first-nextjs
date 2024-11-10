import React, { useState } from "react";

const SearchBar = (props) => {

    const [searchValue, setSearchValue] = useState('')

    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
    }

    const filteredProducts = props.searchItems.filter((product) => {
        return product.includes(searchValue)
    })

    return <div>
        <input type="text" value={searchValue} onChange={handleInputChange}/>
        <br></br>

        <ul>
        {filteredProducts.map((product) => {
            return <div>
                <li key={product}>{product}</li>
            </div>
        })}
        </ul>

    </div>
}

export default SearchBar