import React from "react";
import { NavBar } from "./nav/NavBar";
import { Route, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { ApplicationViews } from "./ApplicationViews";
import "./KandyKorner.css"

export const Kandy = () => {
    return (
        <>

            <NavBar />
            <ApplicationViews />

        </>
    )
}