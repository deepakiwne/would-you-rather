import React, { Component } from 'react'

class NotFound extends Component {

  render() {

    return (
      
      <div className="card" style={{width: '40rem'}}>
        <div className="card-header h6 text-center display-1">
          <strong>404</strong>
        </div>
        <div className="card-body">
          <p className='text-center display-4'>NOT FOUND</p>
        </div>
      </div>
    )
  }
}

export default NotFound