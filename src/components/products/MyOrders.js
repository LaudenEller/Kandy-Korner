import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { useParams } from "react-router-dom"

export const MyOrders = () => {
    const [orders, addOrder] = useState([]) // "WHAT STATE DO I WANT THIS COMPONENT TO RENDER?" 
                                                        // define the array that you want to update, define the function you want to use to modify that array, 
                                                                //and set them = to useState with an empy array inside parenthesis
   
   const history = useHistory()
   
    useEffect(
        () => {
            fetch(`http://localhost:8088/purchases?customerId=${localStorage.getItem("kandy_customer")}&_expand=product`)
                .then(res => res.json())
                .then((data) => { 
                    addOrder(data) } // invoke function that modifies data, do not modify data directly like in vanillaJs
                )
        },
        []
    )

    return (
        <>
                <section className="order">
                    <h2 className="h2">My Orders</h2>
                    
                    {orders.map(
                    (purchase) => {
                        return <p key={`purchase--${purchase.id}`}>{purchase.quantity} {purchase.product.description} costs {purchase.product.price * purchase.quantity}</p> // must use KEY attribute which acts like an Id for React
                    }
                )}
                </section>
        </>
    )
}