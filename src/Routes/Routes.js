import React, { lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "../Components/Login";
const Login = lazy(() => import("./Login"));

<Switch>
  {
    /* Redirect from root URL to /quick-start. */
    <Redirect exact from="/" to="/login" />
  }
  <Route path="/login" component={Login} />
</Switch>;
