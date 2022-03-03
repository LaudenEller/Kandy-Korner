import React from "react";
import { NavBar } from "./nav/NavBar";
import { Route, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { ApplicationViews } from "./ApplicationViews";
import "./KandyKorner.css"
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";

export const Kandy = () => (
    <>
      <Route
        render={() => {
          if (localStorage.getItem("kandy_customer")) {
            return (
              <>
                <NavBar />
                <ApplicationViews />
              </>
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
  
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </>
  );