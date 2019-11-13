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
import NotFound from './NotFound'

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
            <div className='row justify-content-center'>
              <Switch>
                {this.props.loading
                ? 
                  <Route path='/' exact component={Login}/>
                :
                  <Fragment>
                    <Route path='/' exact component={Home} />
                    <Route path='/leaderboard' exact component={LeaderBoard} />
                    <Route path='/add' component={NewQuestion}/>
                    <Route path='/questions/:id' component={QuestionPage} />
                  </Fragment>}
                <Route component={NotFound} />
              </Switch>
              </div>
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
