import React, { Component } from 'react'

class NavBar extends Component {

  render() {

    const logo = 'https://images-na.ssl-images-amazon.com/images/I/61C+2uhGgCL.png'
    const userName = 'Soumya R Bhuyan'
    const avatar = 'https://icon-library.net/images/icon-avatar/icon-avatar-6.jpg'

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
                <img src={logo} width="30" height="30" alt=""/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">New Question</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Leader Board</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Hello, {userName}</a>
                    </li>
                    <li className="nav-item">
                        <img src={avatar}
                            alt="Avatar" className="avatar"></img>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Logout</button>
                </form>
            </div>
        </nav>
    )
  }
}

export default NavBar