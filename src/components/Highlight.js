import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { formatDate } from '../utils/helpers'

class Highlight extends Component {

  render() {

    const { id, highlight, timestamp } = this.props

    return (
        <div className='question-info'>
            <p>Would you rather</p>
            <p>...{highlight}...</p>
            <p>{formatDate(timestamp)}</p>
            <Link
              className="btn btn-success"
              to={`/questions/${id}`}>
                View Poll
            </Link>
        </div>
    )
  }
}

export default Highlight