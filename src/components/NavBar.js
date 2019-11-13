import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import {
    withRouter
  } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'

class NavBar extends Component {

    onLogout = (e) => {
        e.preventDefault()

        // update store
        const { dispatch } = this.props
        dispatch(setAuthedUser(null))

        // Navigate to login
        this.props.history.push('/')
    }
  render() {

    const logo = 'https://images-na.ssl-images-amazon.com/images/I/61C+2uhGgCL.png'
    const avatarPlaceHolder = 'https://toppng.com/public/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png'

    const { name, avatar } = this.props

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
             <Link to='/' exact className="nav-link">
                <a className="navbar-brand" href="#">
                    <img src={logo} width="30" height="30" alt=""/>
                </a>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to='/home' className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/add'
                            className="nav-link">
                            New Question
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/leaderboard'
                            className="nav-link">
                            Leader Board
                        </Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">{name === null ? '' : `Hello ${name}!`}</a>
                    </li>
                    <li className="nav-item">
                        <img src={avatar === null ? avatarPlaceHolder : avatar}
                            alt="Avatar" className="avatar"></img>
                    </li>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.onLogout}>Logout</button>
                </form>
            </div>
        </nav>
    )
  }
}

function mapStateToProps ({ authedUser, users }) {
  
    return {
      name: authedUser === null ? null : users[authedUser].name,
      avatar: authedUser === null ? null : users[authedUser].avatarURL
    }
  }

export default withRouter(connect(mapStateToProps)(NavBar))