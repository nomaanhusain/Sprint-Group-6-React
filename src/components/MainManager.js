import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import DiagTestComponent from './DiagTestComponent'
import Login from './Login'
import ButtonAppBar from './HeaderComponent'
import UserListComponent from './UserListComponent'
import CreateUserComponent from './CreateUserComponent'
import CreateDiagTestComponent from './CreateDiagTestComponent'
import ListTestResultComponent from './ListTestResultComponent'
import CreateTestResultComponent from './CreateTestResultComponent'
import ListCenterComponent from './ListCenterComponent';
import CreateCenterComponent from './CreateCenterComponent';

import ViewCenterComponent from './ViewCenterComponent';
import FooterComponent from './FooterComponent';
class MainManager extends Component {
    render() {
        return (
           <>
                <Router>
                <Switch>
                <Route path = "/" exact component = {Login}></Route>
                <Route path = "/login" component = {Login}></Route>
                <Route path="/user" component = {UserListComponent}></Route>
                <Route path = "/users" component = {UserListComponent}></Route>
                <Route path = "/add-user" component = {CreateUserComponent}></Route>
                <Route path="/test"  component = {DiagTestComponent}></Route>
                <Route path = "/add-test" component = {CreateDiagTestComponent}></Route>
                <Route path="/testresult" component = {ListTestResultComponent}></Route>
                <Route path="/add-testresult" component = {CreateTestResultComponent}></Route>
                <Route path = "/centers" component = {ListCenterComponent}></Route>
                <Route path = "/add-center/:centerId" component = {CreateCenterComponent}></Route>
                <Route path = "/view-center/:centerId" component = {ViewCenterComponent}></Route>
                </Switch>
               </Router>
               <FooterComponent/>
            </>
        )
    }
}

export default MainManager
