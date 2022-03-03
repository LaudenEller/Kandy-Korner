import { useEffect, useState } from "react"


const PurchaseProduct = (eventId) => {
    const newPurchase = {
        customerId: 1,
        locationId: 1,
        employeeId: 1,
        productId: eventId,
        quantity: 1
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

export const ProductList = () => {
    const [products, setProduct] = useState([])

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
    return (
        <>
            {
                products.map((product) => {
                    return <p key={`product--${product.id}`}>
                        We have {product.quantity} {product.description}s which is a {product.productType.type} product with a cost per unit of {product.price}
                        <button onClick={() => {
                                PurchaseProduct(product.id)
                            }}>Purchase</button>
                        </p>
                }
                )
            }
        </>
    )
}