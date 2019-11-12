import React, { Component } from 'react'
import { formatDate } from '../utils/helpers'

class Highlight extends Component {

  toPoll = (e) => {
    e.preventDefault()
    // todo: View Poll
  }
  render() {

    const { highlight, timestamp } = this.props

    return (
        <div className='question-info'>
            <p>Would you rather</p>
            <p>...{highlight}...</p>
            <p>{formatDate(timestamp)}</p>
            <button className='btn' onClick={this.toPoll}>View Poll</button>
        </div>
    )
  }
}

export default Highlight