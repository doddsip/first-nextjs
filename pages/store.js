import Head from "next/head";
import styles from "../styles/Store.module.css";
import SearchBar from "../components/SearchBar";
import React, { useState, useEffect } from "react";

export default function Store() {

    const [productsState, setProductsState] = useState([])

    useEffect(() => {

        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(productsArray=>{
            const newProductsState = productsArray.map((product) => {
                return product.title
            })
            setProductsState(newProductsState)
        })
    }, [])

    const hasProducts = productsState.length > 0

    return (
        <>
        <div className={styles.fakestore}>
            <h1>Fake Store</h1>
            <p>Welcome to the Fake Store!</p>
            <p>Here you'll find a variety of products from the fakestore API.</p>
            {hasProducts ? <SearchBar searchItems={productsState}/> : "Loading..."}
            
        </div>

        </>
    )
}