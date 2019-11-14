import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../App.css'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Home from './Home'
import LoadingBar from 'react-redux-loading'
import NavBar from './NavBar'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import QuestionPage from './QuestionPage'
import Login from './Login'
import PrivateRoute from './PrivateRoute'
import NotFound from './NotFound'
import { empty } from '../utils/helpers'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render(){
    return (
      <Router>
        <Fragment>
          <div className="container">
            <NavBar />
            <LoadingBar />
            <div className='mb-4'></div>
            {this.props.loading
            ? 
              null
            :
            <div className='row justify-content-center'>
              <Switch>
                <Route path='/login' component={Login}/>
                <PrivateRoute path='/' exact component={Home}/>
                <PrivateRoute path='/add' component={NewQuestion}/>
                <PrivateRoute path='/leaderboard' component={LeaderBoard}/>
                <PrivateRoute path='/questions/:id' component={QuestionPage}/>
                <Route component={NotFound} />
              </Switch>
            </div>}
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({ questions, users }) {
  return {
    loading: empty(questions) || empty(users)
  }
}

export default connect(mapStateToProps)(App)
