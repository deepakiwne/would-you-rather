import React from 'react'
import { connect } from 'react-redux'
import {
  Route,
  Redirect
} from 'react-router-dom'
import { empty } from '../utils/helpers'

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
    <Route {...rest} render={(props) => (
        isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }} />
    )} />
)

function mapStateToProps({ authedUser }) {
    return {
        isAuthenticated: !empty(authedUser)
    }
}

export default connect(mapStateToProps)(PrivateRoute)