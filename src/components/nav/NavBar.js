import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul style={{ listStyleType: "none"}} className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/locations">Locations</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/products">Products</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/employees">Employees</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/customers">Customers</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/orders">My Orders</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="#"
                onClick={() => {
                    localStorage.removeItem("kandy_customer")
                }}>logout</Link>
            </li>
        </ul>
    )
}