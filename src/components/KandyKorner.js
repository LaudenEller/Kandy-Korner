import React from "react";
import { LocationList } from "./locations/LocationList"
import { ProductList } from "./products/ProductList";

export const Kandy = () => {
    return (
        <>
            <h1>Kandy Korner Candy Shoppe</h1>

            <h2>Locations</h2>
            <LocationList />

            <h2>Products</h2>
            <ProductList />

        </>
    )
}