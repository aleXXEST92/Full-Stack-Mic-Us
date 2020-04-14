import React from 'react'
import Dashboard from './Components/Dashboard'
import SignUp from './containers/SignUp'
import { Switch, Route } from 'react-router'
// Write component imports here //



// Start Router function here //
function Router () {
    return (
    <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/sign-up" component={SignUp} />
        {/* <Route path="" component={} /> */}
    </Switch>
    )}

export default Router