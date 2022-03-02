import React, { useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const EmployeeForm = () => {
    const [employee, addEmployee] = useState({
        name: "",
        location: 1,
        manager: true,
        fullTime: true,
        hourlyRate: 16
    });

    const history = useHistory()

    const hireEmployee = (event) => {
        const newEmployee = {
            name: employee.name,
            location: employee.locationId,
            manager: employee.manager,
            fullTime: employee.fullTime,
            hourlyRate: employee.hourlyRate,
            employeeId: 1
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
                    <label htmlFor="name">Name:</label>
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
            {/* <fieldset>
                <div className="form-group">
                    <label htmlFor="location">location:</label>
                    <input 
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Technical Specialty"
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.specialty = evt.target.value
                                addEmployee(copy)
                                
                            }
                        } 
                        />
                </div>
            </fieldset> */}
            <fieldset>
                <div className="form-group">
                    <label htmlFor="manager">manager:</label>
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
                    <label htmlFor="full time">full time:</label>
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
                    <label htmlFor="specialty">specialty:</label>
                    <input 
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Rate in whole dollars eg. 12"
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.specialty = evt.target.value
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