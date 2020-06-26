import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";   

class Selfroute extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isloggedin: true
        }
    }
    
    render() {
       if(this.state.isloggedin == true){
        return (
            <BrowserRouter>
            <Switch>
              <Route path="/admin" render={props => <AdminLayout {...props} />} />
              <Route path="/auth" render={props => <AuthLayout {...props} />} />
              <Redirect from="/" to="/admin/index" />
            </Switch>
          </BrowserRouter>
        )
       }
       else{
        return (
            <BrowserRouter>
            <Switch>
              <Route path="/auth" render={props => <AuthLayout {...props} />} />
              <Redirect from="/" to="/auth/login" />
            </Switch>
          </BrowserRouter>
        )
       }
    }
}

export default Selfroute
