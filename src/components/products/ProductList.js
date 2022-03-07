import { useEffect, useState } from "react"



export const ProductList = () => {
    const [products, setProduct] = useState([])
    // initiate state for purchase
    const [purchase, updatePurchase] = useState({
        customerId: 1,
        locationId: 1,
        productId: 1,
        quantity: 10
    })
    // Initialize app state for productLocations
    const [productLocation, setProductLocation] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/products?_expand=productType&_sort=productTypeId")
                .then(res => res.json())
                .then((data) => {
                    setProduct(data)
                })
        },
        []
    )
    
    // Fetch the productLocation array from JSON and populate app state
    useEffect(
        () => {
            fetch("http://localhost:8088/productLocations?_expand=location")
                .then(res => res.json())
                .then((data) => {
                    setProductLocation(data)
                } // invoke function that modifies data, do not modify data directly like in vanillaJs
                )
        },
        []
    )

    // Declare a new function that accepts the id of the product the user wants to purchase as a parameter
    const PurchaseProduct = (eventId) => {

        // Use .find method to find the productLocation that matches the product the user is trying to buy
        const foundProductLocation = productLocation.find(productLocation => productLocation.productId === eventId)

        // Create a new purchase object with 
            //the current user key value as a customerId
            //the matching location from productLocation array in JSON
            //the id of the selected product which was passed as a parameter from invocation on line 103
            //the quantity the user chose from line 88
        const newPurchase = {
            customerId: parseInt(localStorage.getItem("kandy_customer")),
            locationId: foundProductLocation.locationId,
            productId: eventId,
            quantity: parseInt(purchase.quantity)
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPurchase)
        }

        return fetch("http://localhost:8088/purchases", fetchOption)
            .then(response => response.json())
    }

    return (
        <>
            {
                products.map((product) => {
                    return <div classN>
                        <p key={`product--${product.id}`}>
                        We have {product.quantity} {product.description}s which is a {product.productType.type} product with a cost per unit of {product.price}

                        <fieldset>
                                <label htmlFor="quantity">Quantity </label>
                                <select
                                    required autoFocus
                                    type="text"
                                    className="form-control"
                                    onChange={
                                        (evt) => {
                                            const copy = { ...purchase }
                                            copy.quantity = evt.target.value
                                            updatePurchase(copy)
                                        }
                                    }
                                ><option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select>
                        </fieldset>
                        <button onClick={() => {
                            PurchaseProduct(product.id)
                        }}>Purchase</button>
                    </p>
                    </div>
                }
                )
            }
        </>
    )
}