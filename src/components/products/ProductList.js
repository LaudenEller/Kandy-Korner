import { useEffect, useState } from "react"

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
                        We have {product.quantity} {product.description}s which is a {product.productType.type} product with a cost per unit of {product.price}</p>
                }
                )
            }
        </>
    )
}