import React, { Component } from 'react'

function ResultCard ({ option, percent, votes, totalVotes }) {

  return (
    <div className="card mb-3" style={{width: '18rem'}}>
      <div className="card-body">
        <p className="card-text">Would you rather be {option}?</p>
        <div className="progress" style={{height: '35px'}}>
          <div className="progress-bar bg-success" role="progressbar"
            style={{width: percent + '%', height: '35px'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            {percent}%
          </div>
        </div>
      </div>
      <p>{votes} out of {totalVotes} votes</p>
    </div>
  )
}

class Result extends Component {

  render() {

    const { optionOne, optionTwo } = this.props

    return (
      <div className='question-info'>
        <p>Results</p>
        <ResultCard option={optionOne} votes={1} totalVotes={4} percent={25} />
        <ResultCard option={optionTwo} votes={3} totalVotes={4} percent={75} />
      </div>
    )
  }
}

export default Result