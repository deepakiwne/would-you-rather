import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { formatDate } from '../utils/helpers'

class Highlight extends Component {

  render() {

    const { id, highlight, timestamp } = this.props

    return (
      <div className="card " style={{width: '18rem'}}>
        <div className="card-body">
          <h5 className="card-title">Would you rather</h5>
          <h6 className="card-subtitle mb-2 text-muted">...{highlight}...</h6>
          <Link
            className="btn btn-outline-success btn-block"
            to={`/questions/${id}`}>
              View Poll
          </Link>
        </div>
      </div>
    )
  }
}

export default Highlight