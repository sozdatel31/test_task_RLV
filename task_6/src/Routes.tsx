import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {MainPage} from "./components/MainPage/MainPage";
import {Page404} from "./components/Page404/Page404";
import {Employees} from "./components/Employees/Employees";


export function Routes() {
    return <Switch>
        <Route exact path="/" render={() => <MainPage/>}/>
        <Route path="/employees" render={() => <Employees/>}/>
        <Route path="/404" render={() => <Page404/>}/>
        <Redirect from="*" to="/404"/>
    </Switch>
}