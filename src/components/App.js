import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import '../App.css'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Home from './Home'
import LoadingBar from 'react-redux-loading'
import NavBar from './NavBar'
import NewQuestion from './NewQuestion'
import QuestionCard from './QuestionCard'
import LeaderBoard from './LeaderBoard'

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
            <div className='mb-4'></div>
            <LoadingBar />
            {this.props.loading === true
              ? null
              : <div className="row justify-content-center">
                  <Route path='/' exact component={Home} />
                  <Route path='/questions/:id' component={QuestionCard} />
                  <Route path='/add' component={NewQuestion} />
                  <Route path='/leaderboard' component={LeaderBoard} />
                </div>}
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
