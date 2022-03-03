import React from "react";
import { LocationList } from "./locations/LocationList";
import { ProductList } from "./products/ProductList";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import { EmployeeList } from "./employees/EmployeeList";
import { EmployeeForm } from "./employees/EmployeeForm";
import { CustomerList } from "./customers/CustomerList";

export const ApplicationViews = () => {
    return (
        <>
          <Route path="/locations">
                <LocationList />
            </Route>
            <Route path="/products">
                <ProductList />
            </Route>
            <Route exact path="/employees">
                <EmployeeList />
            </Route>
            <Route exact path="/employees/create">
                <EmployeeForm />
            </Route>
            <Route path="/customers">
                <CustomerList />
            </Route>
        </>
    )
}