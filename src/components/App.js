import React, { Component } from 'react'
import '../App.css'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Home from './Home'
import LoadingBar from 'react-redux-loading'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render(){
    return (
      <div className="App">
        <LoadingBar />
        {this.props.loading === true
          ? null
          : <Home />}
      </div>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
