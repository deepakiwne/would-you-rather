import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'

class Login extends Component {

  state = {
      loggedIn: false,
      value : 'sarahedo'
  }
  onChange = (e) => {
      this.setState({
        value: e.target.value
      })
  }
  onSignIn = (e) => {
    e.preventDefault()

    console.log('Sign In as user: ', this.state.value)

    const { dispatch } = this.props
    dispatch(setAuthedUser(this.state.value))

    this.setState({
        loggedIn: true
    })
  }
  render() {

    const logo = 'https://images-na.ssl-images-amazon.com/images/I/61C+2uhGgCL.png'

    if(this.state.loggedIn === true){
        return <Redirect to='/home' />
    }

    const { users } = this.props

    return (
        
        <div className="card" style={{width: '40rem'}}>
            <div className="card-header h6 text-center">
                <strong>Welcome To The Would You Rather App!</strong>
                <div className='text-muted mt-1'>Please sign in to continue</div>
            </div>
            <div className="card-body">
                <form>
                    <img src={logo}
                        className="rounded mx-auto d-block mb-4" style={{width: '250px', height: '250px'}} alt="Logo" />
                    <div className="form-group">
                        <select className="form-control" value={this.state.value} onChange={this.onChange}>
                        {Object.keys(users).map((key) => (
                            <option value={key}>{users[key].name}</option>
                        ))}
                        </select>
                    </div>
                    <button type="button" className="btn btn-success btn-lg btn-block" onClick={this.onSignIn}>Sign In</button>
                </form>
            </div>
        </div>
    )
  }
}

function mapStateToProps ({ users }) {

    return {
      users
    }
  }

export default connect(mapStateToProps)(Login)