import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const EmployeeForm = () => {
    const [employee, addEmployee] = useState({
        name: "",
        locationId: 1,
        manager: true,
        fullTime: true,
        hourlyRate: 16
    });

    const [locations, updateLocation] = useState([])

    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/locations")
                .then(res => res.json())
                .then((locationArray) => { 
                    updateLocation(locationArray) } // invoke function that modifies data, do not modify data directly like in vanillaJs
                )
        },
        []
    )

    const hireEmployee = (event) => {
        const newEmployee = {
            name: employee.name,
            locationId: employee.locationId,
            manager: employee.manager,
            fullTime: employee.fullTime,
            hourlyRate: employee.hourlyRate
        }
        
        event.preventDefault()

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        }

        return fetch("http://localhost:8088/employees", fetchOption)
        .then(response => response.json())
        .then(() => {
            history.push("/employees")
        })
    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                        onChange={
                            (evt)=> {
                                const copy = {...employee}
                                copy.name = evt.target.value
                                addEmployee(copy)
                            }
                        } 
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Store </label>
                    <select  
                        required autoFocus
                        type="text"
                        className="form-control"
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.locationId = evt.target.value
                                addEmployee(copy)
                                
                            }
                        } 
                        ><option value="0">Pick a Location...</option>
                        {locations.map(location => <option value={location.id}>{location.address}</option>)}
                        </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="manager">Manager: </label>
                    <input 
                        type="radio"
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.manager = evt.target.checked
                                addEmployee(copy)
                                
                            }
                        } 
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="full-time">Full Time: </label>
                    <input 
                        type="radio"
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.fullTime = evt.target.checked
                                addEmployee(copy)
                                
                            }
                        } 
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="hourly-rate">Hourly Rate: </label>
                    <input 
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Rate in num: eg. 12"
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.hourlyRate = evt.target.value
                                addEmployee(copy)
                                
                            }
                        } 
                        />
                </div>
            </fieldset>
           
            <button className="btn btn-primary" onClick={hireEmployee}>
                Hire Employee
            </button>
        </form>
    )
}