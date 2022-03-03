import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export const CustomerList = () => {
    const [customers, updateCustomers] = useState([]) // "WHAT STATE DO I WANT THIS COMPONENT TO RENDER?" 
                                                        // define the array that you want to update, define the function you want to use to modify that array, 
                                                                //and set them = to useState with an empy array inside parenthesis
   
   const history = useHistory()
   
    useEffect(
        () => {
            fetch("http://localhost:8088/customers")
                .then(res => res.json())
                .then((customerArray) => { 
                    updateCustomers(customerArray) } // invoke function that modifies data, do not modify data directly like in vanillaJs
                )
        },
        []
    )

    return (
        <>
        {/* <button onClick={() => history.push("/customers/create")}>Hire customer</button> */}
    
            {
                customers.map(
                    (customerObject) => {
                        return <p key={`customer--${customerObject.id}`}>{customerObject.name}</p> // must use KEY attribute which acts like an Id for React
                    }
                )
            }
        </>
    )
}