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
                </Switch>
               </Router>
            </>
        )
    }
}

export default MainManager
