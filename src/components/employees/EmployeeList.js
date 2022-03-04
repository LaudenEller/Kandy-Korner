import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"




export const EmployeeList = () => {
    const [employees, assignEmployees] = useState([]) // "WHAT STATE DO I WANT THIS COMPONENT TO RENDER?" 
    // define the array that you want to update, define the function you want to use to modify that array, 
    //and set them = to useState with an empy array inside parenthesis
    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/employees?_expand=location")
                .then(res => res.json())
                .then((employeeArray) => {
                    assignEmployees(employeeArray)
                } // invoke function that modifies data, do not modify data directly like in vanillaJs
                )
        },
        []
    )

    // const update = () => {
    //     fetch("http://localhost:8088/employees")
    //         .then(res => res.json())
    //         .then((employeeArray) => {
    //             assignEmployees(employeeArray)
    //         } // invoke function that modifies data, do not modify data directly like in vanillaJs
    //         )
    // }

    const fireEmployee = (id) => {
        fetch(`http://localhost:8088/employees/${id}`, {
            method: "DELETE"
        })
        .then(() => {history.push("/locations")})
        .then(() => {history.push("/employees")})
            // .then(update())
    }

    return (
        <>
            <button onClick={() => history.push("/employees/create")}>Hire Employee</button>

            {
                employees.map(
                    (employeeObject) => {
                        return <p key={`employee--${employeeObject.id}`}>{employeeObject.name} works at our {employeeObject.location.address} location
                            <button onClick={() => {
                                fireEmployee(employeeObject.id)
                            }}>Delete</button></p> // must use KEY attribute which acts like an Id for React
                    }
                )
            }
        </>
    )
}